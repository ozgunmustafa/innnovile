import classNames from 'classnames';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import {
  IoIosNotificationsOutline,
  IoAlertCircleOutline,
} from 'react-icons/io';
import { FiAlertCircle } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';
import { AiOutlineLogin } from 'react-icons/ai';
import { useSelector } from 'react-redux';
const accordionTree = [
  {
    title: 'Summary',
    active: true,
    icon: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.3333 2H9.66667V2.66667H2V13.3333H7.828L6 17.5983V18H6.66667V17.735L8.553 13.3333H9.66667V18H10.3333V13.3333H11.447L13.3333 17.735V18H14V17.5983L12.172 13.3333H18V2.66667H10.3333V2ZM4.66667 12.6667V12H6.66667V12.6667H4.66667ZM17.3333 12.6667H7.33333V11.3333H4V12.6667H2.66667V3.33333H17.3333V12.6667Z" fill="currentColor"/>
<path d="M7.35621 6.7453L9.77647 9.11165L14.5157 4.478L14.0268 4L9.77647 8.15565L7.35621 5.7893L4 9.07075L4.48889 9.54875L7.35621 6.7453ZM11.851 8.9717H12.5425V11H11.851V8.9717ZM13.5797 7.28145H14.2712V11H13.5797V7.28145ZM15.3085 5.5912H16V11H15.3085V5.5912Z" fill="currentColor"/>
</svg>

`,
    children: [
      {
        title: 'Authenticator',
        active: true,
      },
      {
        title: 'Feed',
        active: true,
      },
    ],
  },
  {
    title: 'Publish',
    active: true,
    icon: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.0244 11.5998C16.9208 11.5998 16.8214 11.6409 16.7482 11.7142C16.6749 11.7874 16.6337 11.8868 16.6337 11.9904V15.4588C16.6334 15.7695 16.5098 16.0673 16.2901 16.287C16.0704 16.5067 15.7726 16.6303 15.4619 16.6307H4.50128C4.19059 16.6303 3.89272 16.5067 3.67303 16.287C3.45334 16.0673 3.32976 15.7695 3.32941 15.4588V5.27948C3.32976 4.96879 3.45334 4.67092 3.67303 4.45123C3.89272 4.23153 4.19059 4.10796 4.50128 4.1076H7.96968C8.07328 4.1076 8.17264 4.06645 8.24589 3.99319C8.31915 3.91994 8.36031 3.82058 8.36031 3.71698C8.36031 3.61338 8.31915 3.51402 8.24589 3.44077C8.17264 3.36751 8.07328 3.32635 7.96968 3.32635H4.50128C3.98346 3.32694 3.48702 3.53291 3.12086 3.89906C2.75471 4.26522 2.54875 4.76166 2.54816 5.27948V15.4588C2.54875 15.9766 2.75471 16.4731 3.12086 16.8392C3.48702 17.2054 3.98346 17.4114 4.50128 17.4119H15.4619C15.9797 17.4114 16.4761 17.2054 16.8423 16.8392C17.2084 16.4731 17.4144 15.9766 17.415 15.4588V11.9904C17.415 11.9391 17.4049 11.8883 17.3853 11.8409C17.3656 11.7935 17.3369 11.7505 17.3006 11.7142C17.2643 11.6779 17.2213 11.6491 17.1739 11.6295C17.1265 11.6099 17.0757 11.5998 17.0244 11.5998V11.5998Z" fill="currentColor"/>
<path d="M14.3599 3.84046L8.65619 9.54413L10.4957 11.3836L16.1993 5.67993L14.3599 3.84046Z" fill="currentColor"/>
<path d="M7.72559 12.3143L9.7584 11.7512L8.28871 10.2815L7.72559 12.3143Z" fill="currentColor"/>
<path d="M16.7078 2.87366C16.5245 2.69078 16.2762 2.58807 16.0173 2.58807C15.7584 2.58807 15.51 2.69078 15.3268 2.87366L14.9125 3.28796L16.752 5.12745L17.1663 4.71315C17.3491 4.52986 17.4518 4.28153 17.4518 4.02262C17.4518 3.76372 17.3491 3.51538 17.1663 3.3321L16.7078 2.87366Z" fill="currentColor"/>
</svg>

`,
    children: [
      {
        title: 'Compose',
        active: true,
      },
      {
        title: 'Feed',
        active: true,
      },
    ],
  },
  {
    title: 'Engage',
    active: true,
    icon: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.2 16C16.8 15.5 18 14.4 18 12.8C18 11.4 16.8 10.2 15.2 9.5C15.7 8.9 16 8 16 7.1C16 4.3 13.1 2 9.4 2C5.9 2 2 4.1 2 7.1C2 9.2 3.6 10.7 4.3 11.3C4.2 12.5 3.7 13 3.7 13L2.5 14H4C5.2 14 6.2 13.7 7 13.3C7.3 15.2 9.5 16.7 12.3 16.7H12.8C13.4 17.2 14.6 18 16.3 18H17.7L16.6 17.1C16.6 17.1 16.3 16.8 16.2 16V16ZM12.3 15.7C10 15.7 8 14.4 8 12.9V12.7C8.2 12.5 8.4 12.4 8.5 12.2H9.2C11.3 12.2 13.2 11.5 14.4 10.3C15.9 10.8 17 11.8 17 12.8C17 13.8 16.1 14.8 15.3 15.3L15 15.5V15.8C15 16.3 15.2 16.6 15.3 16.9C14.3 16.7 13.6 16.2 13.4 15.9L13.3 15.7H12.3V15.7ZM9.4 3C12.5 3 15 4.9 15 7.1C15 9.3 12.4 11.2 9.2 11.2H8.1L8 11.4C7.7 11.8 6.5 12.6 4.9 12.9C5 12.5 5 11.9 5 11.1V10.8C4 10 2.9 8.6 2.9 7.2C2.9 5 6.1 3 9.4 3Z" fill="currentColor"/>
</svg>
`,
  },
  {
    title: 'Listen',
    active: true,
    icon: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M18 4.33336C18.0876 4.39902 18.1613 4.48128 18.2171 4.57545C18.2728 4.66961 18.3095 4.77384 18.325 4.88217C18.3405 4.99051 18.3344 5.10083 18.3073 5.20684C18.2801 5.31285 18.2323 5.41248 18.1667 5.50002L13.1667 12.1667C13.0389 12.3372 12.8506 12.4522 12.6406 12.4882C12.4306 12.5241 12.2148 12.4783 12.0375 12.36L7.69335 9.46419L3.16669 15.5C3.10103 15.5876 3.01876 15.6613 2.9246 15.7171C2.83043 15.7728 2.72621 15.8095 2.61787 15.825C2.50954 15.8405 2.39921 15.8344 2.2932 15.8073C2.18719 15.7801 2.08757 15.7324 2.00002 15.6667C1.91247 15.601 1.83871 15.5188 1.78296 15.4246C1.7272 15.3304 1.69054 15.2262 1.67506 15.1179C1.65959 15.0095 1.6656 14.8992 1.69276 14.7932C1.71992 14.6872 1.76769 14.5876 1.83335 14.5L6.83335 7.83336C6.96117 7.66289 7.14944 7.54785 7.35945 7.51189C7.56946 7.47594 7.78527 7.52179 7.96252 7.64002L12.3067 10.5359L16.8334 4.50002C16.966 4.32321 17.1634 4.20632 17.3822 4.17507C17.601 4.14381 17.8232 4.20075 18 4.33336V4.33336Z" fill="currentColor"/>
</svg>

`,
  },
  {
    title: 'Report',
    active: true,
    icon: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.7027 16.291H16.6603V6.71912C16.6603 6.62509 16.6251 6.53492 16.5624 6.46844C16.4998 6.40195 16.4148 6.3646 16.3262 6.3646H14.3049C14.2163 6.3646 14.1313 6.40195 14.0686 6.46844C14.006 6.53492 13.9708 6.62509 13.9708 6.71912V16.291H12.5241V8.69021C12.5241 8.59619 12.4889 8.50602 12.4263 8.43953C12.3636 8.37305 12.2786 8.3357 12.19 8.3357H10.1854C10.0968 8.3357 10.0118 8.37305 9.94918 8.43953C9.88653 8.50602 9.85133 8.59619 9.85133 8.69021V16.291H8.4147V11.3703C8.4147 11.2763 8.3795 11.1861 8.31685 11.1197C8.25419 11.0532 8.16921 11.0158 8.0806 11.0158H6.07601C5.9874 11.0158 5.90242 11.0532 5.83976 11.1197C5.77711 11.1861 5.74191 11.2763 5.74191 11.3703V16.291H4.64272V4.35451C4.64272 4.26049 4.60752 4.17032 4.54487 4.10383C4.48221 4.03735 4.39723 4 4.30862 4C4.22002 4 4.13504 4.03735 4.07238 4.10383C4.00972 4.17032 3.97453 4.26049 3.97453 4.35451V16.6455C3.97453 16.7395 4.00972 16.8297 4.07238 16.8962C4.13504 16.9626 4.22002 17 4.30862 17H17.6659C17.7545 17 17.8395 16.9626 17.9021 16.8962C17.9648 16.8297 18 16.7395 18 16.6455C18 16.5515 17.9648 16.4613 17.9021 16.3948C17.8395 16.3283 17.7545 16.291 17.6659 16.291H17.7027ZM14.639 7.07363H15.9921V16.291H14.639V7.07363ZM10.5195 9.04472H11.8559V16.291H10.5195V9.04472ZM6.3934 11.7248H7.7298V16.291H6.3934V11.7248ZM2.3341 5.70875H2.93548C3.02409 5.70875 3.10907 5.6714 3.17172 5.60492C3.23438 5.53844 3.26958 5.44826 3.26958 5.35424C3.26958 5.26022 3.23438 5.17005 3.17172 5.10356C3.10907 5.03708 3.02409 4.99973 2.93548 4.99973H2.3341C2.24549 4.99973 2.16051 5.03708 2.09786 5.10356C2.0352 5.17005 2 5.26022 2 5.35424C2 5.44826 2.0352 5.53844 2.09786 5.60492C2.16051 5.6714 2.24549 5.70875 2.3341 5.70875V5.70875ZM2.3341 7.83229H2.93548C3.02409 7.83229 3.10907 7.79494 3.17172 7.72845C3.23438 7.66197 3.26958 7.5718 3.26958 7.47777C3.26958 7.38375 3.23438 7.29358 3.17172 7.2271C3.10907 7.16061 3.02409 7.12326 2.93548 7.12326H2.3341C2.24549 7.12326 2.16051 7.16061 2.09786 7.2271C2.0352 7.29358 2 7.38375 2 7.47777C2 7.5718 2.0352 7.66197 2.09786 7.72845C2.16051 7.79494 2.24549 7.83229 2.3341 7.83229V7.83229ZM2.3341 9.95228H2.93548C3.02409 9.95228 3.10907 9.91493 3.17172 9.84844C3.23438 9.78196 3.26958 9.69179 3.26958 9.59776C3.26958 9.50374 3.23438 9.41357 3.17172 9.34708C3.10907 9.2806 3.02409 9.24325 2.93548 9.24325H2.3341C2.24549 9.24325 2.16051 9.2806 2.09786 9.34708C2.0352 9.41357 2 9.50374 2 9.59776C2 9.69179 2.0352 9.78196 2.09786 9.84844C2.16051 9.91493 2.24549 9.95228 2.3341 9.95228V9.95228ZM2.3341 12.0758H2.93548C3.02409 12.0758 3.10907 12.0385 3.17172 11.972C3.23438 11.9055 3.26958 11.8153 3.26958 11.7213C3.26958 11.6273 3.23438 11.5371 3.17172 11.4706C3.10907 11.4041 3.02409 11.3668 2.93548 11.3668H2.3341C2.24549 11.3668 2.16051 11.4041 2.09786 11.4706C2.0352 11.5371 2 11.6273 2 11.7213C2 11.8153 2.0352 11.9055 2.09786 11.972C2.16051 12.0385 2.24549 12.0758 2.3341 12.0758V12.0758ZM2.3341 14.1993H2.93548C3.02409 14.1993 3.10907 14.162 3.17172 14.0955C3.23438 14.029 3.26958 13.9389 3.26958 13.8448C3.26958 13.7508 3.23438 13.6606 3.17172 13.5942C3.10907 13.5277 3.02409 13.4903 2.93548 13.4903H2.3341C2.24549 13.4903 2.16051 13.5277 2.09786 13.5942C2.0352 13.6606 2 13.7508 2 13.8448C2 13.9389 2.0352 14.029 2.09786 14.0955C2.16051 14.162 2.24549 14.1993 2.3341 14.1993V14.1993ZM2.3341 16.3229H2.93548C3.02409 16.3229 3.10907 16.2855 3.17172 16.219C3.23438 16.1526 3.26958 16.0624 3.26958 15.9684C3.26958 15.8743 3.23438 15.7842 3.17172 15.7177C3.10907 15.6512 3.02409 15.6139 2.93548 15.6139H2.3341C2.24549 15.6139 2.16051 15.6512 2.09786 15.7177C2.0352 15.7842 2 15.8743 2 15.9684C2 16.0624 2.0352 16.1526 2.09786 16.219C2.16051 16.2855 2.24549 16.3229 2.3341 16.3229V16.3229Z" fill="currentColor"/>
<path d="M5.70569 8.25659C5.65678 8.26607 5.61023 8.28513 5.56873 8.31269C5.52722 8.34024 5.49159 8.37574 5.46387 8.41713C5.43616 8.45853 5.41691 8.50501 5.40725 8.55388C5.39759 8.60275 5.3977 8.65305 5.40758 8.70188C5.42444 8.78909 5.47153 8.86756 5.54055 8.92347C5.60958 8.97939 5.69612 9.00915 5.78493 9.00754H5.85663C6.09437 8.95848 11.3585 7.87546 15.034 3.90565L15.0076 4.2566C15.0014 4.35611 15.0348 4.45403 15.1005 4.52898C15.1663 4.60393 15.259 4.64981 15.3585 4.6566H15.3849C15.4812 4.65677 15.5739 4.62013 15.6441 4.55419C15.7142 4.48825 15.7565 4.39798 15.7623 4.30188L15.8491 2.75848C15.8533 2.70155 15.8445 2.64441 15.8234 2.59136C15.8023 2.53832 15.7694 2.49075 15.7273 2.45224C15.6852 2.41373 15.6348 2.38529 15.5801 2.36905C15.5254 2.35281 15.4677 2.34919 15.4113 2.35848L13.9019 2.60754C13.8524 2.61547 13.8049 2.63308 13.7621 2.65937C13.7194 2.68566 13.6822 2.72011 13.6528 2.76076C13.6233 2.80141 13.6022 2.84745 13.5906 2.89627C13.5789 2.94509 13.577 2.99572 13.5849 3.04527C13.5929 3.09483 13.6105 3.14234 13.6368 3.18509C13.6631 3.22784 13.6975 3.26499 13.7382 3.29442C13.7788 3.32386 13.8248 3.345 13.8737 3.35664C13.9225 3.36828 13.9731 3.37018 14.0227 3.36226L14.5661 3.27546C11.0604 7.1698 5.76229 8.24905 5.70569 8.25659Z" fill="currentColor"/>
</svg>

`,
  },
];

const hasChildren = (item) => ('children' in item ? true : false);

const Layout = ({ children }) => {
  const [activeInd, setActiveInd] = useState(0);
  const [leftMenuIsClosed, setLeftMenuIsClosed] = useState(false);
  const { authUser } = useSelector((state) => state.auth);

  return (
    <div
      className={`template-content  ${
        leftMenuIsClosed ? 'template-content_left-hidden' : ''
      }`}
    >
      <div className="template-content_left">
        <div className="accordion-block">
          <div className="logo-section">
            <img
              src={process.env.PUBLIC_URL + '/logo.png'}
              alt="innovile logo"
              className="w-full"
            />
          </div>

          {accordionTree.map((tree, index) => (
            <React.Fragment key={index}>
              {hasChildren(tree) ? (
                <button
                  className={classNames({
                    'accordion-btn': true,
                    'has-child': hasChildren(tree),
                    opened: activeInd === index ,
                  })}
                  onClick={() => {
                    setActiveInd(activeInd === index ? '' : index);
                  }}
                >
                  <span
                    className="accordion-btn_icon"
                    dangerouslySetInnerHTML={{ __html: tree.icon }}
                  ></span>
                  {tree.title}
                </button>
              ) : (
                <Link to="/" className="accordion-btn accordion-btn_link">
                  <span
                    className="accordion-btn_icon"
                    dangerouslySetInnerHTML={{ __html: tree.icon }}
                  ></span>
                  {tree.title}
                </Link>
              )}

              <div
                className={classNames({
                  'accordion-content': true,
                  'accordion-content_show': activeInd === index,
                })}
              >
                {hasChildren(tree) && (
                  <ul className="accordion-content_menu">
                    {tree.children.map((child, index) => (
                      <li key={'tree-child-' + index}>
                        <Link to="/">{child.title}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="template-content_right">
        <header className="main-header">
          <div className="main-header_left d-flex align-items-center">
            <button
              className="left-menu-btn bg-white bg-opacity-10"
              onClick={() => setLeftMenuIsClosed(!leftMenuIsClosed)}
            >
              <BiMenu size="25px" />
            </button>
            <p className="text-white ml-1">Authenticator</p>
          </div>
          <div className="main-header_right">
            <ul className="list-none flex items-center gap-5 ">
              <li className="flex items-center">
                <label className="block mr-2 text-sm font-medium text-white ">
                  Time Zone :
                </label>

                <select className="w-fit bg-white bg-opacity-20 border border-transparent  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1 ">
                  <option selected>+2</option>
                  <option selected>+7</option>
                </select>
              </li>
              <li>
                <button className="flex items-center bg-white bg-opacity-20 px-3 py-1 rounded-full text-white">
                  <span className="mr-1">
                    {authUser
                      ? authUser.first_name + ' ' + authUser.last_name
                      : 'Admin User'}
                  </span>
                  <FaUserCircle />
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="inline-flex relative items-center text-sm font-medium text-center text-white  "
                >
                  <IoIosNotificationsOutline size="22px" />
                  <span className="sr-only">Notifications</span>
                  <div className="inline-flex absolute -top-2 -right-2 justify-center items-center p-1  h-4 text-[9px] font-bold text-gray-900 bg-white bg-opacity-50 rounded-full">
                    20
                  </div>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="inline-flex relative items-center text-sm font-medium text-center text-white  "
                >
                  <FiAlertCircle size="22px" />
                  <span className="sr-only">Alerts</span>
                  <div className="inline-flex absolute -top-2 -right-2 justify-center items-center p-1  h-4 text-[9px] font-bold text-gray-900 bg-white bg-opacity-50 rounded-full">
                    12
                  </div>
                </button>
              </li>
              <li>
                <button className="flex items-center  rounded-full text-white">
                  <span className="mr-1">Logout</span>
                  <AiOutlineLogin />
                </button>
              </li>
            </ul>
          </div>
        </header>
        <main className="main-content">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
