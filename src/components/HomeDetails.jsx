import React, { useEffect, useState } from 'react'
import { collection, addDoc, doc, getDocs, updateDoc, onSnapshot, deleteDoc } from "@firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "@firebase/storage";
import db from  '../config/firebase-config'
import { FaTimesCircle } from 'react-icons/fa';

function HomeDetails() {
  const [data, setData] = useState({
    heading: "",
    slogan: "",
    description: "",
    imageurl: null,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [editing, setEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [home, setHome] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (editing && editId) {
      const fetchHome = async () => {
        try {
          const homeDocRef = doc(db, "Home", editId);
          const homeDocSnap = await getDocs(homeDocRef);

          if (homeDocSnap.exists()) {
            const existingData = homeDocSnap.data();
            setData(existingData);
          } else {
            console.log("No such document!");
          }
        } catch (error) {
          console.error("Error fetching home item data: ", error);
        }
      };

      fetchHome();
    }
  }, [editing, editId]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "Home"), (snapshot) => {
      const items = [];
      snapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() });
      });
      setHome(items);
    }, (error) => {
      console.error("Error fetching home items: ", error);
      setError("Error fetching home items. Please try again.");
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleEdit = (id) => {
    setEditing(true);
    setEditId(id);

    const homeDocRef = doc(db, 'Home', id);

    const unsubscribe = onSnapshot(homeDocRef, (docSnapshot) => {
      if (docSnapshot.exists()) {
        setData(docSnapshot.data());
      } else {
        console.error('Document does not exist');
      }
    }, (error) => {
      console.error('Error fetching home item: ', error);
    });

    return () => unsubscribe();
  };

  const handleDelete = async (id) => {
    try {
      const homeDocRef = doc(db, "Home", id);
      await deleteDoc(homeDocRef);
    } catch (error) {
      console.error("Error deleting home item: ", error);
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
      const storageRef = ref(storage, "home/" + Date.now());

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
          const homeDocRef = doc(db, "Home", editId);
          await updateDoc(homeDocRef, {
            heading: data.heading,
            slogan: data.slogan,
            description: data.description,
            imageurl: imageUrl,
          });
        } else {
          const homeRef = collection(db, "Home");
          await addDoc(homeRef, {
            heading: data.heading,
            slogan: data.slogan,
            description: data.description,
            imageurl: imageUrl,
          });
        }

        setData({
          heading: "",
    slogan: "",
    description: "",
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
      heading: "",
    slogan: "",
    description: "",
    imageurl: null,
    });
  };

  return (
    <section className='homes' id='homes'>
      <div className='py-8 px-8 text-black w-full'>
        <div className=''>
        <div className="relative">
        <button className="btn btn-primary flex justify-center item-center mt-2 px-2 py-2 mb-8 bg-red-500 text-white self-center" onClick={openModal}>Add New Home Item</button>
           <h1 className="text-4xl font-bold uppercase mb-4 text-center text-gray-900">Our Home</h1>
        </div>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
            {home.map((item) => (
              <div key={item.id} className="bg-white p-4 shadow-2xl">
                <img src={item.imageurl} alt="project pict" className="w-full  h-50 object-cover mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-black py-2 px-8">{item.heading}</h3>
                <p className="mb-2 text-black py-2 px-8">{item.slogan}</p>
                <p className="mb-2 text-black py-2 px-8">{item.description}</p>
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
              <form onSubmit={handleSubmit} className="container mx-auto max-w-md p-4  bg-gray-100 border rounded-lg shadow-md relative">
                <h1 className='text-center font-bold p-4'>{editing ? "UPDATE HOME" : "SUBMIT HOME"}</h1>
  
                <div className="mb-4">
                  <label htmlFor="image" className="block text-sm font-medium text-gray-600">Select Image</label>
                  <input id="image" type="file" name="image" onChange={handleImageChange} accept="image/*" required className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300" />
                </div>
                <div className="mb-4">
                  <label htmlFor="heading" className="block text-sm font-medium text-gray-600">Heading</label>
                  <input id="heading" type="text" name="heading" value={data.heading} onChange={handleInputChange} className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300" />
                </div>
  
                <div className="mb-4">
                  <label htmlFor="slogan" className="block text-sm font-medium text-gray-600">Slogan</label>
                  <input id="slogan" type="text" name="slogan" value={data.slogan} onChange={handleInputChange} className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300" />
                </div>

                <div className="mb-4">
                  <label htmlFor="description" className="block text-sm font-medium text-gray-600">Description</label>
                  <input id="description" type="text" name="description" value={data.description} onChange={handleInputChange} className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300" />
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

export default HomeDetails;