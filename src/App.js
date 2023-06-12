import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

export default function App() {

  const buildDir1 = {
    exp      : ".unityweb",
    dirName  : "Build",
    buildName: "Builds_WebGL-Room_Customizer_v0.32"
  };

  const buildDir_Japan = {
    exp      : "",
    dirName  : "Build-Japan",
    buildName: "JapanCity2"
  };

  const buildDir_MultiTouch = {
    exp      : ".unityweb",
    dirName  : "Build-MultiTouch",
    buildName: "MultiTouch"
  };

  // 어드레서블
  const buildDir_Ham = {
    exp      : ".unityweb",
    dirName  : "Build-Ham",
    buildName: "Ham"
  };

  const bd = buildDir_Ham;

  const { unityProvider } = useUnityContext({
    loaderUrl   : `${bd.dirName}/${bd.buildName}.loader.js`,
    dataUrl     : `${bd.dirName}/${bd.buildName}.data${bd.exp}`,
    frameworkUrl: `${bd.dirName}/${bd.buildName}.framework.js${bd.exp}`,
    codeUrl     : `${bd.dirName}/${bd.buildName}.wasm${bd.exp}`,
    streamingAssetsUrl: `${bd.dirName}/StreamingAssets`,
  });

  return <div className="UnityOuter">
    <Unity className="UnityInner"
      unityProvider={unityProvider}/> 
  </div>
}