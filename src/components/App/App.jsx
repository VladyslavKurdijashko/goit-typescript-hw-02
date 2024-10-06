
import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import "./App.module.css";

const API_KEY = "uY5EEfXXV_uuS72o0t1OINkwXvUGkEAu57vFRxxEW6s";
const BASE_URL = "https://api.unsplash.com/search/photos";

const App = () => {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (!query) return;

    const fetchImages = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get(`${BASE_URL}`, {
          params: {
            query,
            page,
            per_page: 12,
            client_id: API_KEY,
          },
        });

        const fetchedImages = response.data.results;
        setImages((prevImages) => [...prevImages, ...fetchedImages]);
        setTotalPages(response.data.total_pages);
      } catch (err) {
        console.error(err);
        setError("Something went wrong. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  const handleSearch = (newQuery) => {
    if (newQuery === query) return;
    setQuery(newQuery);
    setImages([]);
    setPage(1);
    setError(null);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="App">
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={openModal} />
      {isLoading && <Loader />}
      {!isLoading && images.length > 0 && page < totalPages && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {selectedImage && (
        <ImageModal isOpen={true} onClose={closeModal} image={selectedImage} />
      )}
    </div>
  );
};

export default App;
