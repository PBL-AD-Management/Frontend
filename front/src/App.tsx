// App.tsx

import React, { useState } from 'react';
import './App.css';

interface Ad {
  title: string;
  description: string;
}

const App: React.FC = () => {
  const [ads, setAds] = useState<Ad[]>([]);
  const [ad, setAd] = useState<Ad>({
    title: '',
    description: '',
  });
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setAd((prevAd) => ({
      ...prevAd,
      [name]: value,
    }));
  };

  const handleAddAd = () => {
    setAds((prevAds) => [...prevAds, ad]);
    setAd({ title: '', description: '' });
    setModalOpen(false);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="container">
      <h1>광고 등록 게시판</h1>
      <button onClick={openModal}>+ 추가</button>

      <div className="modal" style={{ display: modalOpen ? 'flex' : 'none' }}>
        <div className="modal-content">
          <span className="close-btn" onClick={closeModal}>
            &times;
          </span>
          <h2>광고 추가</h2>
          <div className="form-group">
            <label htmlFor="title">제목</label>
            <input
              type="text"
              id="title"
              name="title"
              value={ad.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">설명</label>
            <textarea
              id="description"
              name="description"
              value={ad.description}
              onChange={handleInputChange}
              required
            />
          </div>
          <button onClick={handleAddAd}>광고 등록</button>
        </div>
      </div>

      <div>
        {/* 여기에 광고 목록을 보여주는 코드 추가 */}
        {ads.map((ad, index) => (
          <div key={index}>
            <h3>{ad.title}</h3>
            <p>{ad.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
