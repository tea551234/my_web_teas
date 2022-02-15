import React, { Component } from 'react';

class Comment extends Component {
    state = {
        comnents: [
            { id: 1, name: '茶耶', content: "A" },
            { id: 2, name: 'rose', content: "B" },
            { id: 3, name: 'tom', content: "C" }
        ]
    }
    render() {
        return (
            <div>
                <div>
                    <input className='user' type='text' placeholder='name' />
                    <br />
                    <textarea className="content" cols="30" rows="10" placeholder='請輸入內容' />
                    <br />
                    <button>發表評價</button>
                </div>
               {/* 判斷有無相關評論 */}
                {
                    this.state.comnents.length === 0 ? (
                        <div className='no-comment'> 沒有相關評論 </div>

                    ) : (
                        <ul>
                            {
                                this.state.comnents.map(item => (
                                    <li key={item.id}>
                                        <h3>評論人:{item.name}</h3>
                                        <p>評論內容:{item.content}</p>
                                    </li>
                                ))}
                        </ul>)



                }










            </div>
        );
    }
}

export default Comment;