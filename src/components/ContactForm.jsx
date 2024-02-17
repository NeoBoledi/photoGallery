import React, { useEffect, useState } from 'react'
import { collection, addDoc, doc, getDocs, updateDoc, onSnapshot, deleteDoc } from "@firebase/firestore";
import db from  '../config/firebase-config'
import { FaTimesCircle } from 'react-icons/fa';

function ContactForm() {
  const [data, setData] = useState({
    phone: "",
    email: "",
    location: "",
    facebook: "",
    twitter: "",
    tiktok: "",
    instagram: "",
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


  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);
      setError(null);

        if (editing && editId) {
          const testimonialDocRef = doc(db, "testimonial", editId);
          await updateDoc(testimonialDocRef, {
            phone: "",
            email: "",
            location: "",
            facebook: "",
            twitter: "",
            tiktok: "",
            instagram: "",
          });
        } else {
          const testimonialRef = collection(db, "testimonial");
          await addDoc(testimonialRef, {
            phone: "",
            email: "",
            location: "",
            facebook: "",
            twitter: "",
            tiktok: "",
            instagram: "",
          });
        }

        setData({
          phone: "",
          email: "",
          location: "",
          facebook: "",
          twitter: "",
          tiktok: "",
          instagram: "",
        });
        setEditing(false);
        setEditId(null);
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
      phone: "",
            email: "",
            location: "",
            facebook: "",
            twitter: "",
            tiktok: "",
            instagram: "",
    });
  };

  return (
    <section className='testimonialss' id='testimonialss'>
      <div>
        <div className='flex justify-between'>
        <div className="relative">
           <h1 className="text-2xl font-bold mb-4">Our Testimonials</h1>
        </div>
        <button className="btn btn-primary inline-block mt-2 px-4 py-2 mb-8 bg-red-500 text-white self-center" onClick={openModal}>Add New Testimonial</button>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {testimonial.map((item) => (
              <div key={item.id} className="bg-white p-4 rounded-md shadow-md">
                <h3 className="text-lg font-semibold mb-2">{item.fullname}</h3>
                <p className="text-gray-600 mb-2">{item.confession}</p>
                <div className="flex justify-between">
                  <button onClick={() => { handleEdit(item.id); openModal(); }} className="bg-blue text-white py-2 px-8 hover:underline focus:outline-none">Edit</button>
                  <button onClick={() => handleDelete(item.id)} className="bg-red text-white py-2 px-8 hover:underline focus:outline-none">Delete</button>
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
                <h1 className='mb-8 font-bold text-center'>{editing ? "UPDATE TESTIMONIAL" : "SUBMIT TESTIMONIAL"}</h1>
  
                <div className="mb-4">
                  <label htmlFor="imageurl" className="block text-sm font-medium text-gray-600">Select Image</label>
                  <input id="imageurl" type="file" name="imageurl" onChange={handleImageChange} accept="image/*" required className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300" />
                </div>
                <div className="mb-4">
                  <label htmlFor="fullname" className="block text-sm font-medium text-gray-600">Fullname</label>
                  <input id="fullname" type="text" name="fullname" value={data.fullname} onChange={handleInputChange} className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300" />
                </div>
  
                <div className="mb-4">
                  <label htmlFor="confession" className="block text-sm font-medium text-gray-600">Confession</label>
                  <input id="confession" type="text" name="confession" value={data.confession} onChange={handleInputChange} className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300" />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  {error && <div className="text-red-500 mb-4">{error}</div>}
                  <button type="submit" className="btn btn-primary inline-block mt-2 px-4 py-2 mb-8 bg-red-500 text-white self-center text-center" disabled={loading}>{loading ? "Submitting..." : editing ? "UPDATE" : "CREATE"}</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
  
}

export default ContactForm;