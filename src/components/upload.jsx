import React from 'react'
import { useState } from 'react'
import UploadWidget from './UploadWidget';
import {Cloudinary} from "@cloudinary/url-gen";
import {AdvancedImage} from '@cloudinary/react';



function Upload() {

    const [cloud, setCloud] = useState("");
    const [preset, setPreset] = useState("");
    const [showUpload, setShowUpload] = useState(false);
    const [publicId, setPublicId] = useState("");

    function getImageUrl() {
        const cld = new Cloudinary({
            cloud: {
              cloudName: cloud
            }
          });
          const myImage = cld.image(publicId); 
          myImage.format('auto').quality('auto');
          return myImage;
    }

    return (
        <>
        
        <h2>Upload a file</h2>
        <label> Cloud:
          <input onChange={e => setCloud(e.target.value)}/>
        </label>
        <label> Preset:
           <input onChange={e => setPreset(e.target.value)}/>
        </label>


        {cloud !== '' && preset !== '' && 
            <div>
                <br/>
            <button onClick={() => setShowUpload(true)}>
                Open Widget
            </button>
            { showUpload &&
                <UploadWidget cloud={cloud} preset={preset} publicId={publicId} setPublicId={setPublicId}/>
            }
            
            </div>   
            }

            <div>
            {publicId && (
                <>
                <div>
                   <AdvancedImage cldImg={getImageUrl()} />
                </div>
                </>
            )}
            </div>
        </>
    )
}

export default Upload


