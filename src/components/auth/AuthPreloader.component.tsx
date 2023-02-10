import { AuthPreloader } from "./AuthPreloader.style";

const AuthPreloaderComponent = () => {
  return (
    <AuthPreloader color="#29345834">
      <svg
        style={{ display: "block", shapeRendering: "auto", background: "#ffffff0" }}
        width="80%"
        height="80%"
        viewBox="0 0 100 100"
      >
        <rect x="21.5" y="37" width="7" height="26" fill="#233550">
          <animate
            attributeName="y"
            repeatCount="indefinite"
            dur="0.9174311926605504s"
            calcMode="spline"
            keyTimes="0;0.5;1"
            values="26.599999999999998;37;37"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-0.1834862385321101s"
          ></animate>
          <animate
            attributeName="height"
            repeatCount="indefinite"
            dur="0.9174311926605504s"
            calcMode="spline"
            keyTimes="0;0.5;1"
            values="46.800000000000004;26;26"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-0.1834862385321101s"
          ></animate>
        </rect>
        <rect x="46.5" y="37" width="7" height="26" fill="#5699d2">
          <animate
            attributeName="y"
            repeatCount="indefinite"
            dur="0.9174311926605504s"
            calcMode="spline"
            keyTimes="0;0.5;1"
            values="29.2;37;37"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-0.09174311926605505s"
          ></animate>
          <animate
            attributeName="height"
            repeatCount="indefinite"
            dur="0.9174311926605504s"
            calcMode="spline"
            keyTimes="0;0.5;1"
            values="41.6;26;26"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-0.09174311926605505s"
          ></animate>
        </rect>
        <rect x="71.5" y="37" width="7" height="26" fill="#d8ebf9">
          <animate
            attributeName="y"
            repeatCount="indefinite"
            dur="0.9174311926605504s"
            calcMode="spline"
            keyTimes="0;0.5;1"
            values="29.2;37;37"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
          ></animate>
          <animate
            attributeName="height"
            repeatCount="indefinite"
            dur="0.9174311926605504s"
            calcMode="spline"
            keyTimes="0;0.5;1"
            values="41.6;26;26"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
          ></animate>
        </rect>
      </svg>
    </AuthPreloader>
  );
};

export default AuthPreloaderComponent;
