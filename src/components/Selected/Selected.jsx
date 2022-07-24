import  {getBookByID } from "../../api/api";
import {useParams, useNavigate} from 'react-router-dom';
import { useEffect, useState } from "react";
import Spinner from "../Spinner/Spinner";


const Selected = () => {
   const{id} = useParams() 
    const [selected, setSelected] = useState({})
    const navigate = useNavigate();
    // console.log(selected.data.volumeInfo.title)
    const goBack = () => {
        navigate('/')
    }
    
    useEffect(() => {
        getBookByID(id, setSelected)
    },[id])

    return (
        <>
       
        {!selected.data ? (<Spinner />) : (
            
                <div className="book-box ">
                         <button className="btn book-backBtn" onClick={goBack}>
        Go Back
      </button>
                    {selected.data.volumeInfo.imageLinks ? (
                    <img src={selected.data.volumeInfo.imageLinks.thumbnail} alt="" className="img-book" />
                    ) : (
                        <img
            className="book-box"
            src={`https://via.placeholder.com/300x450?text=ooops`}
            // src={`https://i.picsum.photos/id/1025/300/450`} need to checkout
            alt="img"
            />     
                    )}
            
                    <div className="selected-info-box">
                        
                    <h2 className="book-title">Name: {selected.data.volumeInfo.title}</h2>
                    <h3>Author: {selected.data.volumeInfo.authors}</h3>
                        <h4>Publisher: {selected.data.volumeInfo.publisher} <span>{selected.data.volumeInfo.publishedDate}</span></h4>
                        <p>Categories: {selected.data.volumeInfo.categories} </p>
                        <p>Page Count: {selected.data.volumeInfo.pageCount} pgs.</p>
                    </div>
                    <div className="selected-descr-box">

                        <p className="book-descr">{selected.data.volumeInfo.description}</p>
                        
                    </div>
            </div>
    )
}
</>
    )
}
export default Selected;
