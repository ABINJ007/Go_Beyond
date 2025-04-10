// components/icons/PhoneIcon.js
export default function PhoneIcon({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ verticalAlign: 'middle' }}
    >
      <path
        d="M3 5C3 4.44772 3.44772 4 4 4H7.28C7.61141 4 7.91689 4.18153 8.07782 4.47214L9.77 7.59C9.94278 7.899 9.88818 8.2861 9.62826 8.54602L8.12 10.05C9.56676 12.6486 11.8514 14.9332 14.45 16.38L15.954 14.8717C16.2139 14.6118 16.601 14.5572 16.91 14.73L20.0279 16.4222C20.3185 16.5831 20.5 16.8886 20.5 17.22V20.5C20.5 21.0523 20.0523 21.5 19.5 21.5H17C10.0964 21.5 3.5 14.9036 3.5 8V5.5C3.5 5.22386 3.72386 5 4 5H3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
