import React from 'react'

export default function Contact(props) {
    return (
        <div style={{ color: props.mode === 'dark' ? 'white' : '#212529' }}>
            <h2 className="text-center p-3">Contact Me</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium blanditiis voluptate ipsa, ipsum est ea velit, aliquid modi cumque aspernatur quidem. Pariatur ipsum aliquid odio cumque, doloribus quia eos quod possimus facere veniam labore ut adipisci nostrum optio, mollitia minima sed corporis commodi repellendus perferendis sapiente nemo rerum vel deserunt?</p>
        </div>)
}
