import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

export default function App() {

  const buildDir1 = {
    exp      : ".unityweb",
    dirName  : "Build",
    buildName: "Builds_WebGL-Room_Customizer_v0.31"
  };

  const bd = buildDir1;

  const { unityProvider } = useUnityContext({
    loaderUrl   : `${bd.dirName}/${bd.buildName}.loader.js`,
    dataUrl     : `${bd.dirName}/${bd.buildName}.data${bd.exp}`,
    frameworkUrl: `${bd.dirName}/${bd.buildName}.framework.js${bd.exp}`,
    codeUrl     : `${bd.dirName}/${bd.buildName}.wasm${bd.exp}`,
  });

  return <div className="UnityOuter">
    <Unity className="UnityInner"
      unityProvider={unityProvider}/> 
  </div>
}