import React from 'react';
import styled from 'styled-components';
import { ProfileImg, Text } from '@components/atoms';
import { color } from '@theme/index';
import { timeAgo } from '@utils/time';
import { Size } from '@constants/index';

interface MessageReplyBarProps {
  profileImgs: Array<string>;
  replyCount: number;
  lastRepliedTime: Date;
  onClick?: () => void;
}

const MessageReplyBarWrap = styled.div`
  display: flex;
  margin-top: 0.2rem;
  padding: 0.2rem;
  border-radius: 0.3rem;
  cursor: pointer;
  &:hover {
    background-color: ${color.tertiary};
  }
`;

const ProfileImgWrap = styled.div`
  margin: 0rem 0.05rem;
`;

const ReplyCountWrap = styled.div`
  display: flex;
  margin: 0rem 0.5rem;
  p:hover {
    text-decoration: underline;
  }
`;

const MessageReplyBar: React.FC<MessageReplyBarProps> = ({ profileImgs, replyCount, lastRepliedTime, onClick, ...props }) => {
  const profileNum = profileImgs.length >= 5 ? 5 : profileImgs.length;
  const removedOverlapProfileImgs = Array.from(new Set(profileImgs));
  const createProfileImg = removedOverlapProfileImgs.slice(0, profileNum).map((profileImg) => (
    <ProfileImgWrap key={profileImg}>
      <ProfileImg src={profileImg}></ProfileImg>
    </ProfileImgWrap>
  ));

  return (
    <MessageReplyBarWrap onClick={onClick} {...props}>
      {createProfileImg}
      <ReplyCountWrap>
        <Text fontColor={color.text_septenary} size={Size.SUPER_SMALL} isBold={true}>
          {`${replyCount} ${replyCount === 1 ? 'reply' : 'replies'}`}
        </Text>
      </ReplyCountWrap>
      <Text fontColor={color.primary} size={Size.SUPER_SMALL} isBold={false}>
        {timeAgo(lastRepliedTime)}
      </Text>
    </MessageReplyBarWrap>
  );
};

export { MessageReplyBar, MessageReplyBarProps };
