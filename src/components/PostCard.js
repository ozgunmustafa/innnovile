import React from 'react';
import { HiOutlineTrash, HiDotsHorizontal } from 'react-icons/hi';
import { BiLike, BiComment, BiShareAlt, BiShow, BiCheck } from 'react-icons/bi';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

import StatisticCard from './StatisticCard';

const getStatus = (status) => {
  if (status === 0) {
    return 'need-aproval';
  }
  if (status === 1) {
    return 'scheduled';
  }
  if (status === 2) {
    return 'published';
  }
  if (status === 3) {
    return 'publishing';
  }
  if (status === 4) {
    return 'error';
  }
};
const getChannel = (channel) => {
  if (channel === 'instagrambusiness') {
    return <BsInstagram color="white" />;
  }
  if (channel === 'twitter') {
    return <BsTwitter color="white" />;
  }
  if (channel === 'facebook') {
    return <FaFacebookF color="white" />;
  }
};

const PostCard = ({ postType, postStatus, item }) => {
  return (
    <div className="post-card">
      <div
        className={`post-card_left post-card_left post-card_status ${getStatus(
          item.status,
        )}`}
      >
        {getChannel(item.account.channel)}
      </div>
      <div className="post-card_right">
        <article className="">
          <div className="d-flex align-items-center justify-between mb-3">
            <span style={{ color: '#878787' }}>{item.published_at}</span>
            <div className="d-flex align-items-center">
              {item.is_published && (
                <button className="icon-btn ml-1">
                  <BiCheck size="1.5em" color="#878787" />
                </button>
              )}

              <button className="icon-btn ml-1">
                <HiOutlineTrash size="1.5em" color="#878787" />
              </button>
              <button
                className="icon-btn ml-1"
                style={{ borderRadius: '50%', borderColor: '#878787' }}
              >
                <HiDotsHorizontal size="1.5em" color="#878787" />
              </button>
            </div>
          </div>
          <div>
            <p className="mb-3">{item.entry.message}</p>
            <img
              src={
                item.entry.image
                  ? item.entry.image[0]
                  : process.env.PUBLIC_URL + '/no-post-imgae.png'
              }
              onError={(event) => {
                event.target.src =
                  process.env.PUBLIC_URL + '/no-post-image.png';
                event.onerror = null;
              }}
              className="post-card-img mb-3"
              alt=""
            />
            <div className="d-flex">
              <StatisticCard
                count="12"
                icon={<BiLike size="1.4em" color="#b3b3b3" />}
              />
              <StatisticCard
                count="25"
                icon={<BiComment size="1.4em" color="#b3b3b3" />}
              />
              <StatisticCard
                count="25"
                icon={<BiShareAlt size="1.4em" color="#b3b3b3" />}
              />
              <StatisticCard
                count="25"
                icon={<BiShow size="1.4em" color="#b3b3b3" />}
              />
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default PostCard;
