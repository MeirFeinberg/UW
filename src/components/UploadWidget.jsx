import { useEffect, useRef } from 'react';

const UploadWidget = ({cloud,preset,setPublicId}) => {

    const cloudinaryRef = useRef();
    const widgetRef = useRef();

     useEffect( () => {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: cloud,
            uploadPreset: preset
        }, (error, result) => {
            if (!error && result && result.event === "success") {
              console.log("Done! Here is the image info: ", result.info);
              setPublicId(result.info.public_id);
            }
        });
        widgetRef.current.open();
    }, []) 
}

export default UploadWidget