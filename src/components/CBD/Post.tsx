import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function Post({ account, group, show, handleClose, createNewPost }: any){
    const [msg, setMsg] = useState<string>("");

    return(<Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Group</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="form">
            <div className="form-group row">
                <label htmlFor="groupName" className="col-sm-3 col-form-label">Group Name:</label>
                <div className="col-sm-9">
                <label className="col-form-label" >{group.name}</label>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="name" className="col-sm-3 col-form-label">Message:</label>
                <div className="col-sm-9">
                    <textarea maxLength={50} required className="form-control" id="name" name="name" value={msg} 
                    onChange={(e) => setMsg(e.target.value)} />
                </div>
            </div>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => createNewPost(group, msg)}>
            Post
          </Button>
        </Modal.Footer>
      </Modal>)
}

export default Post;