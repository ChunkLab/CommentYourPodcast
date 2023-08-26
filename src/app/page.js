import SearchBar from './searchBar'

export default function Home() {
  return (
    <main className="flex justify-center">
      <nav className='w-full md:p-8 invisible md:visible'>
        <div className='lg:w-[169px] w-[89px]'>
          <svg className="w-fill"  viewBox="0 0 169 59" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M39.3333 37.3666V35.4H40.3167C40.5775 35.4 40.8276 35.2964 41.012 35.112C41.1964 34.9276 41.3 34.6774 41.3 34.4166V30.4833C41.3 30.2225 41.1964 29.9724 41.012 29.788C40.8276 29.6036 40.5775 29.5 40.3167 29.5H35.4V23.6C35.4 22.0352 34.7784 20.5345 33.6719 19.4281C32.5655 18.3216 31.0648 17.7 29.5 17.7C27.9352 17.7 26.4345 18.3216 25.3281 19.4281C24.2216 20.5345 23.6 22.0352 23.6 23.6V29.5H18.6833C18.4225 29.5 18.1724 29.6036 17.988 29.788C17.8036 29.9724 17.7 30.2225 17.7 30.4833V34.4166C17.7 34.6774 17.8036 34.9276 17.988 35.112C18.1724 35.2964 18.4225 35.4 18.6833 35.4H19.6667V37.3666C19.6695 39.4584 20.3381 41.495 21.5757 43.1814C22.8132 44.8678 24.5554 46.1165 26.55 46.7467V53.1H25.5667C24.7843 53.1 24.0339 53.4108 23.4807 53.964C22.9275 54.5172 22.6167 55.2676 22.6167 56.05V58.0166C22.6167 58.2774 22.7203 58.5276 22.9047 58.712C23.0891 58.8964 23.3392 59 23.6 59H35.4C35.6608 59 35.9109 58.8964 36.0953 58.712C36.2797 58.5276 36.3833 58.2774 36.3833 58.0166V56.05C36.3833 55.2676 36.0725 54.5172 35.5193 53.964C34.9661 53.4108 34.2157 53.1 33.4333 53.1H32.45V46.7467C34.4446 46.1165 36.1868 44.8678 37.4244 43.1814C38.6619 41.495 39.3305 39.4584 39.3333 37.3666ZM39.3333 31.4666V33.4333H35.4V31.4666H39.3333ZM25.5667 29.5H33.4333V37.3666C33.4333 38.4098 33.0189 39.4103 32.2813 40.1479C31.5437 40.8856 30.5432 41.3 29.5 41.3C28.4568 41.3 27.4564 40.8856 26.7187 40.1479C25.9811 39.4103 25.5667 38.4098 25.5667 37.3666V29.5ZM29.5 19.6666C30.5432 19.6666 31.5437 20.0811 32.2813 20.8187C33.0189 21.5563 33.4333 22.5568 33.4333 23.6V27.5333H25.5667V23.6C25.5667 22.5568 25.9811 21.5563 26.7187 20.8187C27.4564 20.0811 28.4568 19.6666 29.5 19.6666ZM19.6667 31.4666H23.6V33.4333H19.6667V31.4666ZM21.6333 37.3666V35.4H23.6V37.3666C23.6 38.9314 24.2216 40.4321 25.3281 41.5386C26.4345 42.645 27.9352 43.2666 29.5 43.2666C31.0648 43.2666 32.5655 42.645 33.6719 41.5386C34.7784 40.4321 35.4 38.9314 35.4 37.3666V35.4H37.3667V37.3666C37.3667 39.453 36.5379 41.4539 35.0626 42.9292C33.5873 44.4045 31.5864 45.2333 29.5 45.2333C27.4136 45.2333 25.4127 44.4045 23.9374 42.9292C22.4622 41.4539 21.6333 39.453 21.6333 37.3666ZM34.4167 56.05V57.0333H24.5833V56.05C24.5833 55.7892 24.6869 55.5391 24.8714 55.3547C25.0558 55.1702 25.3059 55.0666 25.5667 55.0666H33.4333C33.6941 55.0666 33.9443 55.1702 34.1287 55.3547C34.3131 55.5391 34.4167 55.7892 34.4167 56.05ZM30.4833 47.2V53.1H28.5167V47.2H30.4833Z" fill="#0A0D5C"/>
            <path d="M27.5333 24.5833C27.6953 24.585 27.8551 24.5462 27.9982 24.4705C28.1414 24.3948 28.2634 24.2846 28.3532 24.1499C28.4431 24.0151 28.4979 23.8601 28.5127 23.6988C28.5275 23.5376 28.5018 23.3752 28.438 23.2263C28.3881 23.1072 28.3183 22.9975 28.2315 22.9018C28.0413 22.7264 27.7921 22.6289 27.5333 22.6289C27.2746 22.6289 27.0253 22.7264 26.8352 22.9018C26.7463 22.9958 26.6762 23.106 26.6287 23.2263C26.5649 23.3752 26.5392 23.5376 26.554 23.6988C26.5688 23.8601 26.6236 24.0151 26.7134 24.1499C26.8033 24.2846 26.9253 24.3948 27.0684 24.4705C27.2116 24.5462 27.3714 24.585 27.5333 24.5833Z" fill="#0A0D5C"/>
            <path d="M30.1982 24.8685C30.1024 24.7819 29.9927 24.7121 29.8737 24.662C29.6942 24.5889 29.4974 24.5695 29.3071 24.6061C29.1168 24.6428 28.9413 24.7339 28.8019 24.8685C28.7151 24.9642 28.6452 25.0739 28.5954 25.193C28.5187 25.3719 28.4974 25.5696 28.5342 25.7606C28.5709 25.9517 28.6641 26.1274 28.8017 26.265C28.9393 26.4026 29.115 26.4958 29.3061 26.5326C29.4971 26.5693 29.6949 26.548 29.8737 26.4713C29.9927 26.4212 30.1024 26.3514 30.1982 26.2648C30.3358 26.1273 30.429 25.9516 30.4658 25.7606C30.5026 25.5695 30.4813 25.3719 30.4047 25.193C30.3548 25.0739 30.285 24.9642 30.1982 24.8685Z" fill="#0A0D5C"/>
            <path d="M30.7685 24.2982C30.906 24.4368 31.0817 24.5314 31.2732 24.5698C31.4647 24.6083 31.6634 24.5888 31.8437 24.5139C32.0241 24.439 32.1781 24.3121 32.2861 24.1493C32.3941 23.9865 32.4511 23.7953 32.45 23.6C32.4464 23.3396 32.3445 23.0903 32.1648 22.9018C32.1179 22.8598 32.0687 22.8204 32.0173 22.7838C31.9624 22.7468 31.9029 22.717 31.8403 22.6953C31.7845 22.6671 31.7249 22.6472 31.6633 22.6363C31.5038 22.6038 31.3388 22.611 31.1827 22.6573C31.0267 22.7036 30.8844 22.7876 30.7685 22.9018C30.6796 22.9958 30.6095 23.106 30.562 23.2263C30.5069 23.343 30.4799 23.471 30.4833 23.6C30.482 23.7295 30.5066 23.8579 30.5555 23.9778C30.6045 24.0977 30.6769 24.2066 30.7685 24.2982Z" fill="#0A0D5C"/>
            <path d="M28.8018 22.3315C28.8934 22.423 29.0023 22.4954 29.1222 22.5444C29.2421 22.5933 29.3705 22.6179 29.5 22.6167C29.6278 22.6182 29.7547 22.5949 29.8736 22.5478C29.991 22.4906 30.1001 22.4178 30.1981 22.3315C30.2847 22.2357 30.3545 22.126 30.4046 22.007C30.455 21.8888 30.4818 21.7618 30.4833 21.6333C30.4797 21.373 30.3778 21.1236 30.1981 20.9352C30.1023 20.8486 29.9926 20.7788 29.8736 20.7287C29.7248 20.6649 29.5624 20.6392 29.4011 20.654C29.2399 20.6688 29.0848 20.7236 28.9501 20.8134C28.8153 20.9033 28.7051 21.0253 28.6295 21.1685C28.5538 21.3116 28.515 21.4714 28.5166 21.6333C28.5132 21.7623 28.5402 21.8903 28.5953 22.007C28.6454 22.126 28.7152 22.2357 28.8018 22.3315Z" fill="#0A0D5C"/>
            <path d="M29.5 36.3833C30.0834 36.3833 30.6538 36.2103 31.1389 35.8861C31.624 35.562 32.0022 35.1013 32.2254 34.5622C32.4487 34.0232 32.5071 33.43 32.3933 32.8578C32.2795 32.2855 31.9985 31.7599 31.586 31.3473C31.1734 30.9348 30.6477 30.6538 30.0755 30.54C29.5033 30.4262 28.9101 30.4846 28.3711 30.7079C27.832 30.9311 27.3713 31.3093 27.0472 31.7944C26.723 32.2795 26.55 32.8499 26.55 33.4333C26.55 34.2157 26.8608 34.966 27.414 35.5193C27.9673 36.0725 28.7176 36.3833 29.5 36.3833ZM29.5 32.45C29.6945 32.45 29.8846 32.5076 30.0463 32.6157C30.208 32.7237 30.334 32.8773 30.4085 33.057C30.4829 33.2367 30.5024 33.4344 30.4644 33.6251C30.4265 33.8159 30.3328 33.9911 30.1953 34.1286C30.0578 34.2662 29.8826 34.3598 29.6918 34.3977C29.5011 34.4357 29.3034 34.4162 29.1237 34.3418C28.944 34.2674 28.7904 34.1413 28.6824 33.9796C28.5743 33.8179 28.5167 33.6278 28.5167 33.4333C28.5167 33.1725 28.6203 32.9224 28.8047 32.738C28.9891 32.5536 29.2392 32.45 29.5 32.45Z" fill="#0A0D5C"/>
            <path d="M29.5 0C21.6788 0.00884896 14.1805 3.11972 8.65012 8.65012C3.11972 14.1805 0.00884896 21.6788 0 29.5H1.96667C1.96667 22.1977 4.86749 15.1945 10.031 10.031C15.1945 4.86749 22.1977 1.96667 29.5 1.96667C36.8023 1.96667 43.8055 4.86749 48.969 10.031C54.1325 15.1945 57.0333 22.1977 57.0333 29.5H59C58.9912 21.6788 55.8803 14.1805 50.3499 8.65012C44.8195 3.11972 37.3212 0.00884896 29.5 0Z" fill="#0A0D5C"/>
            <path d="M53.1 29.5C53.1 23.2409 50.6136 17.2382 46.1877 12.8123C41.7619 8.38645 35.7591 5.90002 29.5 5.90002C23.2409 5.90002 17.2382 8.38645 12.8123 12.8123C8.38645 17.2382 5.90002 23.2409 5.90002 29.5H7.86669C7.86669 23.7625 10.1459 18.26 14.2029 14.2029C18.26 10.1459 23.7625 7.86669 29.5 7.86669C35.2375 7.86669 40.7401 10.1459 44.7971 14.2029C48.8541 18.26 51.1334 23.7625 51.1334 29.5H53.1Z" fill="#0A0D5C"/>
            <path d="M47.2 29.5C47.2 24.8057 45.3352 20.3036 42.0158 16.9842C38.6964 13.6648 34.1943 11.8 29.5 11.8C24.8057 11.8 20.3036 13.6648 16.9842 16.9842C13.6648 20.3036 11.8 24.8057 11.8 29.5H13.7667C13.7667 25.3272 15.4243 21.3254 18.3748 18.3748C21.3254 15.4243 25.3272 13.7667 29.5 13.7667C33.6727 13.7667 37.6746 15.4243 40.6251 18.3748C43.5757 21.3254 45.2333 25.3272 45.2333 29.5H47.2Z" fill="#0A0D5C"/>
            <path d="M96.45 47C97.5833 47 98.6833 46.85 99.75 46.55C100.85 46.25 101.75 45.9 102.45 45.5C103.15 45.0667 103.767 44.65 104.3 44.25C104.867 43.8167 105.267 43.45 105.5 43.15L105.9 42.7L109.9 46.65C109.767 46.8167 109.583 47.0333 109.35 47.3C109.117 47.5667 108.567 48.05 107.7 48.75C106.867 49.4167 105.967 50.0167 105 50.55C104.033 51.05 102.783 51.5167 101.25 51.95C99.7167 52.3833 98.1167 52.6 96.45 52.6C91.3833 52.6 87.15 50.8833 83.75 47.45C80.3833 43.9833 78.7 39.6667 78.7 34.5C78.7 29.3333 80.3833 25.0333 83.75 21.6C87.15 18.1333 91.3833 16.4 96.45 16.4C98.0167 16.4 99.5333 16.6 101 17C102.467 17.3667 103.683 17.8167 104.65 18.35C105.617 18.8833 106.467 19.4167 107.2 19.95C107.967 20.4833 108.533 20.9333 108.9 21.3L109.4 21.9L105.35 25.85C105.25 25.75 105.117 25.6167 104.95 25.45C104.817 25.25 104.45 24.9333 103.85 24.5C103.283 24.0667 102.683 23.6833 102.05 23.35C101.417 23.0167 100.583 22.7167 99.55 22.45C98.55 22.15 97.5167 22 96.45 22C93.0833 22 90.3 23.2167 88.1 25.65C85.9 28.0833 84.8 31.0333 84.8 34.5C84.8 37.9667 85.9 40.9167 88.1 43.35C90.3 45.7833 93.0833 47 96.45 47ZM129.139 38.2V52H123.139V38.2L111.189 17H117.789L126.339 32.65L134.889 17H141.089L129.139 38.2ZM156.352 33.7C158.352 33.7 159.885 33.2167 160.952 32.25C162.052 31.25 162.602 29.9 162.602 28.2C162.602 26.5 162.052 25.1667 160.952 24.2C159.885 23.2 158.352 22.7 156.352 22.7H151.202V33.7H156.352ZM145.202 52V17H157.102C160.535 17 163.319 18.0667 165.452 20.2C167.619 22.3 168.702 24.9667 168.702 28.2C168.702 31.4333 167.619 34.1167 165.452 36.25C163.319 38.35 160.535 39.4 157.102 39.4H151.202V52H145.202Z" fill="#0A0D5C"/>
          </svg>
        </div>
      </nav>
      <section className='max-w-screen-lg min-h-screen w-full'>
        {/* <SearchBar></SearchBar> */}
        <div className='circle circle-orange'></div>
        <div className='circle circle-blue'></div>
      </section>
    </main>
  )
}
