import Link from "next/link";
import Icon from "./Icon";

export default function SocialMediaLinks() {
  return (
    <div className="flex justify-end gap-4">
      <Link href="#" aria-labelledby="facebook-label" target="_blank">
        <span id="facebook-label" className="sr-only">
          Facebook profile (opens in a new tab)
        </span>
        <Icon
          svgProps={{
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          }}
        >
          <path
            id="Path"
            d="M22.675 0H1.325C0.593 0 0 0.593 0 1.325V22.676C0 23.407 0.593 24 1.325 24H12.82V14.706H9.692V11.084H12.82V8.413C12.82 5.313 14.713 3.625 17.479 3.625C18.804 3.625 19.942 3.724 20.274 3.768V7.008L18.356 7.009C16.852 7.009 16.561 7.724 16.561 8.772V11.085H20.148L19.681 14.707H16.561V24H22.677C23.407 24 24 23.407 24 22.675V1.325C24 0.593 23.407 0 22.675 0Z"
            fill="white"
          />
        </Icon>
      </Link>
      <Link href="#" aria-labelledby="x-label" target="_blank">
        <span id="x-label" className="sr-only">
          X (formerly Twitter) profile (opens in a new tab)
        </span>
        <Icon
          svgProps={{
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          }}
        >
          <path
            d="M13.941 10.392L21.5355 1.5H19.7355L13.143 9.2205L7.87505 1.5H1.80005L9.76505 13.176L1.80005 22.5H3.60005L10.563 14.346L16.1265 22.5H22.2015L13.941 10.392ZM11.4765 13.278L10.6695 12.1155L4.24805 2.865H7.01255L12.1935 10.3305L13.0005 11.493L19.737 21.198H16.9725L11.4765 13.278Z"
            fill="white"
          />
        </Icon>
      </Link>
      <Link href="#" aria-labelledby="instagram-label" target="_blank">
        <span id="instagram-label" className="sr-only">
          Instagram profile (opens in a new tab)
        </span>
        <Icon
          svgProps={{
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          }}
        >
          <path
            id="Shape"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 0C8.741 0 8.333 0.014 7.053 0.072C2.695 0.272 0.273 2.69 0.073 7.052C0.014 8.333 0 8.741 0 12C0 15.259 0.014 15.668 0.072 16.948C0.272 21.306 2.69 23.728 7.052 23.928C8.333 23.986 8.741 24 12 24C15.259 24 15.668 23.986 16.948 23.928C21.302 23.728 23.73 21.31 23.927 16.948C23.986 15.668 24 15.259 24 12C24 8.741 23.986 8.333 23.928 7.053C23.732 2.699 21.311 0.273 16.949 0.073C15.668 0.014 15.259 0 12 0ZM12 2.163C15.204 2.163 15.584 2.175 16.85 2.233C20.102 2.381 21.621 3.924 21.769 7.152C21.827 8.417 21.838 8.797 21.838 12.001C21.838 15.206 21.826 15.585 21.769 16.85C21.62 20.075 20.105 21.621 16.85 21.769C15.584 21.827 15.206 21.839 12 21.839C8.796 21.839 8.416 21.827 7.151 21.769C3.891 21.62 2.38 20.07 2.232 16.849C2.174 15.584 2.162 15.205 2.162 12C2.162 8.796 2.175 8.417 2.232 7.151C2.381 3.924 3.896 2.38 7.151 2.232C8.417 2.175 8.796 2.163 12 2.163ZM5.838 12C5.838 8.597 8.597 5.838 12 5.838C15.403 5.838 18.162 8.597 18.162 12C18.162 15.404 15.403 18.163 12 18.163C8.597 18.163 5.838 15.403 5.838 12ZM12 16C9.791 16 8 14.21 8 12C8 9.791 9.791 8 12 8C14.209 8 16 9.791 16 12C16 14.21 14.209 16 12 16ZM16.965 5.595C16.965 4.8 17.61 4.155 18.406 4.155C19.201 4.155 19.845 4.8 19.845 5.595C19.845 6.39 19.201 7.035 18.406 7.035C17.61 7.035 16.965 6.39 16.965 5.595Z"
            fill="white"
          />
        </Icon>
      </Link>
    </div>
  );
}
