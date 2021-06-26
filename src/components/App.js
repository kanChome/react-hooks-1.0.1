import React, {useReducer, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import reducer from '../reducers'

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addEvent = e => {
    e.preventDefault()
    dispatch({
      type: 'CREATE_EVENT',
      title,
      body
    })
    reset()
  }

  const reset = () => {
    setTitle('')
    setBody('')
  }

  const deleteALlEvents = e => {
    e.preventDefault()
    const result = window.confirm("全てのイベントを本当に削除しても良いですか？")
    result && dispatch({type: 'DELETE_ALL_EVENTS',})
  }

  const unCreatable = title === '' || body === ''

  return (
    <div className="container-field">
     <h4>イベント作成フォーム</h4>
     <form>
       <div className="form-group">
         <label htmlFor="formEventTitle">タイトル</label>
         <input className="form-control" id="formEventTitle" value={title} onChange={e => setTitle(e.target.value)} />
       </div>
 
       <div className="form-group">
         <label htmlFor="formEventBody">ボディー</label>
         <textarea className="form-control" id="formEventBody" value={body} onChange={e => setBody(e.target.value)} />
       </div>
 
       <button className="btn btn-primary" onClick={addEvent} disabled={unCreatable}>イベントを作成する</button>
       <button className="btn btn-danger" onClick={deleteALlEvents} disabled={!state.length}>全てのイベントを削除する</button>
     </form>
 
     <h4>イベント一覧</h4>
     <table className="table table-hover">
       <thead>
         <tr>
           <th>ID</th>
           <th>タイトル</th>
           <th>ボディー</th>
         </tr>
       </thead>
       <tbody>
         {
           state.map((event, idx) => {
             const id = event.id
             const handleClickDeleteBtn = () => {
               const result = window.confirm(`イベントid=${id}を本当に削除しても良いですか？`)
               result && dispatch({type: 'DELETE_EVENT', id})
             }
             return (
              <tr key={idx}>
                <td>{id}</td>
                <td>{event.title}</td>
                <td>{event.body}</td>
                <td><button type="button" className="btn btn-danger" onClick={handleClickDeleteBtn}>削除</button></td>
              </tr>
             )
          })
        }
       </tbody>
     </table>
    </div>
  );
}

export default App;
