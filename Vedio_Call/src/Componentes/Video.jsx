import React from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { APP_ID } from './zegodata';
const Video = () => {
  const { id } = useParams();
  const roomID = id;
  let myMeeting = async (element) => {
 // generate Kit Token
  const appID = APP_ID;
  const serverSecret="854d1417c7fec332651a03f0487fce78";
  const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,  Date.now() .toString(),"-");


 // Create instance object from Kit Token.
  const zp = ZegoUIKitPrebuilt.create(kitToken);
  // start the call
  zp.joinRoom({
    container: element,
    sharedLinks: [
      {
        name: 'Copy URL',
        url:
         window.location.protocol + '//' + 
         window.location.host + window.location.pathname +
          '?roomID=' +
          roomID,
      },
    ],
    scenario: {
      mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
    },
  });


};

  return (
    <>
    <div className='A' ref={myMeeting}>
      
    </div>
    <div className='info'>
      <h1> Host Name:-{id}</h1>

      
    </div>
    </>
  )
}

export default Video
