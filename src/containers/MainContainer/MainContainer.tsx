import React, {useCallback, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axiosApi from "../../axiosApi";
import Spinner from "../../components/Spinner/Spinner";
import Content from "../../components/Content/Content";
import {GotContent} from "../../types";

const MainContainer = () => {
  const {id} = useParams();
  const [content, setContent] = useState<GotContent | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchContent = useCallback(async () => {
    try {
      setLoading(true);
      if (id === undefined) {
        const contentResponse = await axiosApi.get<GotContent>('/pages/home/.json');
        setContent(contentResponse.data);
      } else {
        const contentResponse = await axiosApi.get<GotContent>('/pages/' + id + '.json');
        setContent(contentResponse.data);
      }
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchContent().catch(console.error);
  }, [fetchContent]);

  if (loading) {
    return (
      <Spinner/>
    )
  }

  return (
    <>
      {content && (
        <Content title={content.title} content={content.content}/>
      )}
    </>
  );
};

export default MainContainer;