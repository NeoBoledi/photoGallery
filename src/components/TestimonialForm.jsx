import React, { useEffect, useState } from 'react'
import { collection, addDoc, doc, getDocs, updateDoc, onSnapshot, deleteDoc } from "@firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "@firebase/storage";
import db from  '../config/firebase-config'
import { FaTimesCircle } from 'react-icons/fa';

function TestimonialForm() {
  const [data, setData] = useState({
    fullname: "",
    confession: "",
    imageurl: null,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [editing, setEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [testimonial, setTestimonial] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (editing && editId) {
      const fetchTestimonial = async () => {
        try {
          const testimonialDocRef = doc(db, "Testimonials", editId);
          const testimonialDocSnap = await getDocs(testimonialDocRef);

          if (testimonialDocSnap.exists()) {
            const existingData = testimonialDocSnap.data();
            setData(existingData);
          } else {
            console.log("No such document!");
          }
        } catch (error) {
          console.error("Error fetching testimonial item data: ", error);
        }
      };

      fetchTestimonial();
    }
  }, [editing, editId]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "Testimonials"), (snapshot) => {
      const items = [];
      snapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() });
      });
      setTestimonial(items);
    }, (error) => {
      console.error("Error fetching testimonial items: ", error);
      setError("Error fetching testimonial items. Please try again.");
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleEdit = (id) => {
    setEditing(true);
    setEditId(id);

    const testimonialDocRef = doc(db, 'Testimonials', id);

    const unsubscribe = onSnapshot(testimonialDocRef, (docSnapshot) => {
      if (docSnapshot.exists()) {
        setData(docSnapshot.data());
      } else {
        console.error('Document does not exist');
      }
    }, (error) => {
      console.error('Error fetching testimonial item: ', error);
    });

    return () => unsubscribe();
  };

  const handleDelete = async (id) => {
    try {
      const testimonialDocRef = doc(db, "Testimonials", id);
      await deleteDoc(testimonialDocRef);
    } catch (error) {
      console.error("Error deleting testimonial item: ", error);
      setError("Error deleting item. Please try again.");
    }
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    setData({ ...data, image: imageFile });
  };

  const handleImageUpload = async (imageFile) => {
    try {
      const storage = getStorage();
      const storageRef = ref(storage, "testimonials/" + Date.now());

      await uploadBytes(storageRef, imageFile);

      const imageUrl = await getDownloadURL(storageRef);

      return imageUrl;
    } catch (error) {
      console.error("Error uploading image: ", error);
      throw error;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);
      setError(null);

      if (data.image instanceof File) {
        const imageUrl = await handleImageUpload(data.image);

        if (editing && editId) {
          const testimonialDocRef = doc(db, "Testimonials", editId);
          await updateDoc(testimonialDocRef, {
            fullname: data.fullname,
            confession: data.confession,
            imageurl: imageUrl,
          });
        } else {
          const testimonialRef = collection(db, "Testimonials");
          await addDoc(testimonialRef, {
            fullname: data.fullname,
            confession: data.confession,
            imageurl: imageUrl,
          });
        }

        setData({
          fullname: "",
    confession: "",
    imageurl: null,
        });
        setEditing(false);
        setEditId(null);
      } else {
        setError("No image file selected.");
      }
    } catch (error) {
      console.error("Error adding/updating image: ", error);
      setError("Error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditing(false); 
    setData({
      fullname: "",
    confession: "",
    imageurl: null,
    });
  };

  return (
    <section className='testimonials' id='testimonials'>
      <div className='py-8 px-8 text-black w-full'>
        <div className=''>
        <div className="relative">
        <button className="btn btn-primary flex justify-center item-center mt-2 px-2 py-2 mb-8 bg-red-500 text-white self-center" onClick={openModal}>Add New Testimonial</button>
           <h1 className="text-4xl font-bold uppercase mb-8 text-center text-gray-900">Our Testimonials</h1>
        </div>
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-3">
            {testimonial.map((item) => (
              <div key={item.id} className="bg-white p-4 shadow-2xl">
                <img src={item.imageurl} alt="testimonial pict" className="w-full h-50 object-cover mb-4 h-48" />
                <h3 className="text-lg font-semibold mb-2 text-black py-2 px-8">{item.fullname}</h3>
                <p className="mb-2 text-black py-2 px-8">{item.confession}</p>
                <div className="flex justify-between">
                  <button onClick={() => { handleEdit(item.id); openModal(); }} className="bg-red-500 text-white py-2 px-8 hover:underline focus:outline-none">Edit</button>
                  <button onClick={() => handleDelete(item.id)} className="bg-red-500 text-white py-2 px-8 hover:underline focus:outline-none">Delete</button>
                </div>
              </div>
            ))}
          </div>

          
        </div>
  
        {isModalOpen && (
          <div className="modal-overlay fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="modal bg-white p-8 rounded-lg relative z-50">
              <button onClick={closeModal} className="absolute top-2 right-2 text-gray-600"><FaTimesCircle/></button>
              <form onSubmit={handleSubmit} className="container mx-auto max-w-md p-4 bg-gray-100 border rounded-lg shadow-md relative">
                <h1 className='text-center font-bold p-4'>{editing ? "UPDATE TESTIMONIAL" : "SUBMIT TESTIMONIAL"}</h1>
  
                <div className="mb-4">
                  <label htmlFor="image" className="block text-sm font-medium text-gray-600">Select Image</label>
                  <input id="image" type="file" name="image" onChange={handleImageChange} accept="image/*" required className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300" />
                </div>
                <div className="mb-4">
                  <label htmlFor="fullname" className="block text-sm font-medium text-gray-600">Full Names</label>
                  <input id="fullname" type="text" name="fullname" value={data.fullname} onChange={handleInputChange} className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300" />
                </div>
  
                <div className="mb-4">
                  <label htmlFor="confession" className="block text-sm font-medium text-gray-600">What They Say</label>
                  <input id="confession" type="text" name="confession" value={data.confession} onChange={handleInputChange} className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300" />
                </div>

                <div>
                  {error && <div className="text-red-500 mb-4">{error}</div>}
                  <button type="submit" className="btn btn-primary inline-block mt-2 px-4 py-2 mb-8 bg-red-500 text-white self-center" disabled={loading}>{loading ? "Submitting..." : editing ? "UPDATE" : "CREATE"}</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
  
}

export default TestimonialForm;