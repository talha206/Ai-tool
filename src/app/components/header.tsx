import React from 'react'

const Header = () => {
  return (
    <div className='w-[75%] h-[65px] mt-4 flex bg-white mx-4 rounded-lg items-center px-3 justify-between'>
      <div className='flex'> 
         <h2 className='font-semibold text-lg'>You can ask your Questions?</h2>
        <p className='ml-5 w-17 text-xs font-semibold bg-secondary shadow-custom px-2 py-1 rounded-sm'>Ai TOOL</p>
        </div>
        {/*Start of my icons on header area */}
        <div className='flex items-center justify-around w-[15%]'>
    <span className='ml-50 '>
        <svg width="2" height="60" viewBox="0 0 2 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="1" y1="60.0042" x2="1" y2="-0.00416565" stroke="#7C7C7C"/>
        </svg>
    </span>
    <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_30_139)">
              <path d="M14 16.2499C15.933 16.2499 17.5 14.7948 17.5 12.9999C17.5 11.205 15.933 9.74992 14 9.74992C12.067 9.74992 10.5 11.205 10.5 12.9999C10.5 14.7948 12.067 16.2499 14 16.2499Z" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M22.6334 16.2499C22.478 16.5767 22.4317 16.9391 22.5003 17.2906C22.569 17.642 22.7494 17.9663 23.0184 18.2216L23.0884 18.2866C23.3053 18.4878 23.4774 18.7268 23.5948 18.9898C23.7122 19.2528 23.7727 19.5348 23.7727 19.8195C23.7727 20.1042 23.7122 20.3862 23.5948 20.6492C23.4774 20.9122 23.3053 21.1512 23.0884 21.3524C22.8716 21.5539 22.6143 21.7137 22.331 21.8227C22.0478 21.9317 21.7442 21.9879 21.4375 21.9879C21.1309 21.9879 20.8273 21.9317 20.544 21.8227C20.2607 21.7137 20.0034 21.5539 19.7867 21.3524L19.7167 21.2874C19.4417 21.0377 19.0925 20.8701 18.714 20.8064C18.3356 20.7427 17.9452 20.7857 17.5934 20.9299C17.2483 21.0672 16.954 21.2953 16.7467 21.5859C16.5394 21.8766 16.4282 22.2171 16.4267 22.5658V22.7499C16.4267 23.3246 16.1809 23.8757 15.7433 24.282C15.3057 24.6883 14.7122 24.9166 14.0934 24.9166C13.4745 24.9166 12.881 24.6883 12.4434 24.282C12.0059 23.8757 11.76 23.3246 11.76 22.7499V22.6524C11.751 22.2938 11.626 21.9461 11.4013 21.6543C11.1766 21.3626 10.8625 21.1404 10.5 21.0166C10.1481 20.8724 9.75779 20.8294 9.37933 20.8931C9.00087 20.9568 8.65164 21.1243 8.37669 21.3741L8.30669 21.4391C8.08998 21.6405 7.83264 21.8003 7.54938 21.9094C7.26612 22.0184 6.96249 22.0745 6.65585 22.0745C6.34922 22.0745 6.04559 22.0184 5.76233 21.9094C5.47906 21.8003 5.22172 21.6405 5.00502 21.4391C4.78807 21.2379 4.61597 20.9989 4.49855 20.7359C4.38112 20.4728 4.32068 20.1909 4.32068 19.9062C4.32068 19.6214 4.38112 19.3395 4.49855 19.0765C4.61597 18.8134 4.78807 18.5745 5.00502 18.3733L5.07502 18.3083C5.34398 18.0529 5.5244 17.7286 5.59302 17.3772C5.66165 17.0258 5.61532 16.6633 5.46002 16.3366C5.31213 16.0162 5.06657 15.7429 4.75356 15.5504C4.44056 15.3579 4.07377 15.2546 3.69835 15.2533H3.50002C2.88118 15.2533 2.28769 15.025 1.8501 14.6186C1.41252 14.2123 1.16669 13.6612 1.16669 13.0866C1.16669 12.5119 1.41252 11.9608 1.8501 11.5545C2.28769 11.1482 2.88118 10.9199 3.50002 10.9199H3.60502C3.99118 10.9115 4.36569 10.7955 4.67987 10.5868C4.99405 10.3781 5.23335 10.0865 5.36669 9.74992C5.52199 9.42317 5.56831 9.06071 5.49969 8.70928C5.43107 8.35785 5.25065 8.03357 4.98169 7.77825L4.91169 7.71325C4.69474 7.51203 4.52264 7.27307 4.40521 7.01004C4.28779 6.74701 4.22735 6.46507 4.22735 6.18033C4.22735 5.8956 4.28779 5.61366 4.40521 5.35063C4.52264 5.0876 4.69474 4.84864 4.91169 4.64742C5.12839 4.44597 5.38573 4.28616 5.66899 4.17712C5.95225 4.06809 6.25588 4.01196 6.56252 4.01196C6.86916 4.01196 7.17278 4.06809 7.45605 4.17712C7.73931 4.28616 7.99665 4.44597 8.21335 4.64742L8.28335 4.71242C8.55831 4.96217 8.90754 5.1297 9.286 5.19342C9.66446 5.25714 10.0548 5.21413 10.4067 5.06992H10.5C10.8451 4.93259 11.1394 4.70457 11.3467 4.41392C11.5539 4.12327 11.6652 3.78269 11.6667 3.43409V3.24992C11.6667 2.67528 11.9125 2.12418 12.3501 1.71785C12.7877 1.31153 13.3812 1.08325 14 1.08325C14.6189 1.08325 15.2123 1.31153 15.6499 1.71785C16.0875 2.12418 16.3334 2.67528 16.3334 3.24992V3.34742C16.3348 3.69602 16.4461 4.03661 16.6534 4.32726C16.8607 4.6179 17.155 4.84593 17.5 4.98325C17.8519 5.12746 18.2422 5.17048 18.6207 5.10676C18.9992 5.04304 19.3484 4.8755 19.6234 4.62575L19.6934 4.56075C19.9101 4.3593 20.1674 4.19949 20.4507 4.09046C20.7339 3.98142 21.0375 3.9253 21.3442 3.9253C21.6508 3.9253 21.9545 3.98142 22.2377 4.09046C22.521 4.19949 22.7783 4.3593 22.995 4.56075C23.212 4.76198 23.3841 5.00094 23.5015 5.26396C23.6189 5.52699 23.6794 5.80893 23.6794 6.09367C23.6794 6.3784 23.6189 6.66034 23.5015 6.92337C23.3841 7.1864 23.212 7.42536 22.995 7.62658L22.925 7.69158C22.6561 7.9469 22.4756 8.27119 22.407 8.62261C22.3384 8.97404 22.3847 9.3365 22.54 9.66325V9.74992C22.6879 10.0703 22.9335 10.3436 23.2465 10.5361C23.5595 10.7286 23.9263 10.8319 24.3017 10.8333H24.5C25.1189 10.8333 25.7123 11.0615 26.1499 11.4679C26.5875 11.8742 26.8334 12.4253 26.8334 12.9999C26.8334 13.5746 26.5875 14.1257 26.1499 14.532C25.7123 14.9383 25.1189 15.1666 24.5 15.1666H24.395C24.0196 15.168 23.6528 15.2713 23.3398 15.4638C23.0268 15.6562 22.7812 15.9295 22.6334 16.2499Z" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      <defs>
          <clipPath id="clip0_30_139">
            <rect width="28" height="26" fill="white"/>
          </clipPath>
      </defs>
      </svg>

      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15M7 10L12 15M12 15L17 10M12 15V3" stroke="#1E1E1E" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

    </div>
 </div>
   )
}

export default Header