import React, {useState} from 'react';
import {GotContent} from "../../types";
import axiosApi from "../../axiosApi";
import Spinner from "../Spinner/Spinner";
import {useNavigate} from "react-router-dom";

const EditForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [gotPage, setGotPage] = useState('');
  const [content, setContent] = useState<GotContent>({
    title: '',
    content: '',
  });

  const onSelectChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGotPage(e.target.value);
    try {
      setLoading(true);
      const contentResponse = await axiosApi.get<GotContent>('/pages/' + e.target.value + '.json');
      setContent(contentResponse.data);
    } finally {
      setLoading(false);
    }
  };

  const onContentChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setContent(prev => ({...prev, [name]: value}));
  };

  const onFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axiosApi.put('/pages/' + gotPage + '.json', content);
    } finally {
      setLoading(false);
      navigate('/' + gotPage);
    }
  };

  if (loading) {
    return (
      <Spinner/>
    )
  }

  return (
    <form onSubmit={onFormSubmit}>
      <div className='mt-5'>
        <h4 className='mb-5 text-center'>Edit Pages</h4>
        <div className='mb-4'>
          <label htmlFor="category">Category</label>
          <select
            name="category"
            id="category"
            className='form-control mt-2'
            onChange={onSelectChange}
            value={gotPage}
            required
          >
            <option value="">Select Page</option>
            <option value="home">Home</option>
            <option value="about">About</option>
            <option value="contacts">Contacts</option>
            <option value="divisions">Divisions</option>
          </select>
        </div>
        <div className='mb-4'>
          <label htmlFor="title">Title</label>
          <input
            placeholder='title...'
            id='title'
            name='title'
            type="text"
            className='form-control mt-2'
            required
            onChange={onContentChange}
            value={content.title}
          />
        </div>
        <div className='mb-4'>
          <label htmlFor="content">Content</label>
          <textarea
            placeholder='content...'
            id='content'
            name='content'
            className='form-control mt-2'
            required
            onChange={onContentChange}
            value={content.content}
            style={{height: '100px'}}
          />
        </div>
        <div className='text-center'>
          <button className='btn btn-info'>Save</button>
        </div>
      </div>
    </form>
  );
};

export default EditForm;