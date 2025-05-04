import  React from 'react';
import './ChatBox.css';
import assets from '../../assets/assets';

const ChatBox = () => {
    return (
        <div className='chat-box'>
            <div className="chat-user">
                <img src={assets.profile_img} alt="" /> 
                <p>Richard Sanford <img className='dot' src={assets.green_dot} alt="" /></p>
                <img src={assets.help_icon} className='help' alt="" />   
            </div>  



            <div className="chat-message">
                <div className="s-message">
                    <p className="message">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum amet aut pariatur nam autem quo voluptatum earum asperiores consequuntur deleniti?
                    </p>
                    <div>
                        <img src={assets.profile_img} alt="" />
                        <p>2:30 PM</p>
                    </div>
                </div>
                
                <div className="s-message">
                    <img className='message-img' src={assets.pic1} alt="" />
                    <div>
                        <img src={assets.profile_img} alt="" />
                        <p>2:30 PM</p>
                    </div>
                </div>

                <div className="r-message">
                    <p className="message">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum amet aut pariatur nam autem quo voluptatum earum asperiores consequuntur deleniti?
                    </p>
                    <div>
                        <img src={assets.profile_img} alt="" />
                        <p>2:30 PM</p>
                    </div>
                </div>
            </div>



            <div className="chat-input">
                <input type="text" placeholder='Send a Message' name="" id="" />
                <input type="file" accept='image/png, image/jpeg' hidden id='image' />  
                <label htmlFor='image'>
                    <img src={assets.gallery_icon} alt="" />    
                </label>  
                    <img src={assets.send_button} alt="" />
            </div>          
        </div>
    )
}
export default ChatBox;