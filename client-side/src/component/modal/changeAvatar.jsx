import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';
import UploadFileAvatar from '../../component/upload-file-avatar/upload-file-avatar.jsx'
const ModalAvatar = ({setOpenModal, openModal, updateAvatar, setNewToken}) => {
  const [profile, setProfile] = useState(null)
  const handleUpload = () => {
    updateAvatar(profile)
  }
  
  
  
  return (
    <>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Ganti Avatar</Modal.Header>
        <Modal.Body>
          <UploadFileAvatar setProfile={setProfile}/>
        </Modal.Body>
        
        <Modal.Footer>
        <Button color="failure" onClick={()=> handleUpload()} aria-label="upload avatar">Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModalAvatar