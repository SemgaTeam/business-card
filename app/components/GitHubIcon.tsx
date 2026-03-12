import { siGithub } from 'simple-icons';

function GithubIcon({ size = 24, color = 'white' }) {
  return (
    <svg

      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={color}
      className='color-white'
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={siGithub.path} />
    </svg>
  );
}

export default GithubIcon;