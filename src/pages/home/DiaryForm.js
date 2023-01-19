import {useEffect, useState} from "react";
import {useFirestore} from "../../hooks/useFirestore";

export const DiaryForm = ({ uid }) => {

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const { addDocument, response } = useFirestore('diary');

    const handleData = (event) => {
        if(event.target.id === "tit"){
            setTitle(event.target.value);
        }else if(event.target.id === "txt"){
            setText(event.target.value);
        }
    };

    useEffect(() => {
        if(response.success){
            setTitle('');
            setText('');
        };
    },[response.success]);

    const handelSubmit = (event) => {
        event.preventDefault();
        console.log(title,text);
        addDocument({ uid, title, text });
    };

    return(
        <>
            <form onSubmit={handelSubmit}>
                <legend>M E M O</legend>
                <fieldset>


                    <label htmlFor="tit">제목</label>
                    <input type="text" id="tit" required onChange={handleData} value={title} />

                    <label htmlFor="txt">내용</label>
                    <textarea type="text" id="txt" required onChange={handleData} value={text} ></textarea>

                    <button type="submit">저장하기</button>
                </fieldset>
            </form>
        </>
    )
}