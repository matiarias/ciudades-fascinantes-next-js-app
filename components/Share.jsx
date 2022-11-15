import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

const Share = () => {
  const shareUrl = "https://google.com";
  return (
    <div>
      <FacebookShareButton url={shareUrl}>
        <FacebookIcon />
      </FacebookShareButton>

      <LinkedinShareButton url={shareUrl}>
        <LinkedinIcon />
      </LinkedinShareButton>
    </div>
  );
};

export default Share;
