import React, {useCallback, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axiosApi from "../../axiosApi";
import Spinner from "../../components/Spinner/Spinner";
import {GotContent} from "../../types";

const MainContainer = () => {
  const {id} = useParams();
  const [content, setContent] = useState<GotContent | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchContent = useCallback(async () => {
    try {
      setLoading(true);
      const contentResponse = await axiosApi.get<GotContent>('/pages/' + id + '.json');
      setContent(contentResponse.data);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchContent().catch(console.error);
  }, [fetchContent]);

  if(loading) {
    return (
      <Spinner/>
    )
  }

  return (
    <div>
    </div>
  );
};

export default MainContainer;