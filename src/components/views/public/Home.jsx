import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { GetBlog } from "../../../redux/actions/blogAction";
import { getBlog } from "../../../api/blog.api";

const Home = () =>{

    const dispatch = useDispatch();

    const readBlog = async () => {

        let payload = await getBlog.business()
          .then((res) => {
            const { data } = res;
            if (data.status) {
              return data.data;
            }
          })
          .catch((err) => {
            // do something herer
          });
        dispatch(GetBlog.ALL(payload));
    };
    const BLOG = useSelector((state) => state.blog).all;

    React.useEffect(() =>{
      // on first render fetch blog datas
      readBlog();
    },[])
    //
    console.log(BLOG)

    return(
        <>
        <h1>See on your console</h1>
        </>
    )
}

export default Home;