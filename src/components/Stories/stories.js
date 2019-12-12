import React from "react";
import VintageMovie from "./VintageBabyAnja.MOV";
import VintageMovie2 from "./VintageBabyAnja.mp4";
import VintageMovie3 from "./VintageBabyAnja.MOV";
import VintageMovie4 from "./VintageBabyAnja.mp4";
import VintageMovie5 from "./VintageBabyAnja.MOV";
import VintageMovie6 from "./VintageBabyAnja.mp4";

const stories = {
  Original: [
    {
      url: VintageMovie,
      type: "video",
      seeMore: ({ close }) => (
        <div style={{ width: "100%", height: "100%" }}>Hello</div>
      ),
      header: {
        heading: "Seunghun Lee",
        subheading: "Posted 5h ago",
        profileImage:
          "https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-1/p480x480/78619450_3511477825559709_2560672000230031360_o.jpg?_nc_cat=109&_nc_ohc=8sw80EBk-gsAQkYAPs8t1feeRW-nD5tnLGGrQMdxF-wIAzZ3c86r9Wxtw&_nc_ht=scontent-frt3-1.xx&oh=dbcb73bfbd868c3774618cb6e770fb11&oe=5E896CB1"
      }
    }
  ],
  Vintage: [
    {
      url: VintageMovie2,
      type: "video",
      seeMore: ({ close }) => (
        <div style={{ width: "100%", height: "100%" }}>Hello</div>
      ),
      header: {
        heading: "Seunghun Lee",
        subheading: "Posted 5h ago",
        profileImage:
          "https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-1/p480x480/78619450_3511477825559709_2560672000230031360_o.jpg?_nc_cat=109&_nc_ohc=8sw80EBk-gsAQkYAPs8t1feeRW-nD5tnLGGrQMdxF-wIAzZ3c86r9Wxtw&_nc_ht=scontent-frt3-1.xx&oh=dbcb73bfbd868c3774618cb6e770fb11&oe=5E896CB1"
      }
    }
  ],
  Lofi: [
    {
      url: VintageMovie3,
      type: "video",
      seeMore: ({ close }) => (
        <div style={{ width: "100%", height: "100%" }}>Hello</div>
      ),
      header: {
        heading: "Seunghun Lee",
        subheading: "Posted 5h ago",
        profileImage:
          "https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-1/p480x480/78619450_3511477825559709_2560672000230031360_o.jpg?_nc_cat=109&_nc_ohc=8sw80EBk-gsAQkYAPs8t1feeRW-nD5tnLGGrQMdxF-wIAzZ3c86r9Wxtw&_nc_ht=scontent-frt3-1.xx&oh=dbcb73bfbd868c3774618cb6e770fb11&oe=5E896CB1"
      }
    }
  ],
  Dreamy: [
    {
      url: VintageMovie4,
      type: "video",
      seeMore: ({ close }) => (
        <div style={{ width: "100%", height: "100%" }}>Hello</div>
      ),
      header: {
        heading: "Seunghun Lee",
        subheading: "Posted 5h ago",
        profileImage:
          "https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-1/p480x480/78619450_3511477825559709_2560672000230031360_o.jpg?_nc_cat=109&_nc_ohc=8sw80EBk-gsAQkYAPs8t1feeRW-nD5tnLGGrQMdxF-wIAzZ3c86r9Wxtw&_nc_ht=scontent-frt3-1.xx&oh=dbcb73bfbd868c3774618cb6e770fb11&oe=5E896CB1"
      }
    }
  ],
  Melancholic: [
    {
      url: VintageMovie5,
      type: "video",
      seeMore: ({ close }) => (
        <div style={{ width: "100%", height: "100%" }}>Hello</div>
      ),
      header: {
        heading: "Seunghun Lee",
        subheading: "Posted 5h ago",
        profileImage:
          "https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-1/p480x480/78619450_3511477825559709_2560672000230031360_o.jpg?_nc_cat=109&_nc_ohc=8sw80EBk-gsAQkYAPs8t1feeRW-nD5tnLGGrQMdxF-wIAzZ3c86r9Wxtw&_nc_ht=scontent-frt3-1.xx&oh=dbcb73bfbd868c3774618cb6e770fb11&oe=5E896CB1"
      }
    }
  ],
  Destroyed: [
    {
      url: VintageMovie6,
      type: "video",
      seeMore: ({ close }) => (
        <div style={{ width: "100%", height: "100%" }}>Hello</div>
      ),
      header: {
        heading: "Seunghun Lee",
        subheading: "Posted 5h ago",
        profileImage:
          "https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-1/p480x480/78619450_3511477825559709_2560672000230031360_o.jpg?_nc_cat=109&_nc_ohc=8sw80EBk-gsAQkYAPs8t1feeRW-nD5tnLGGrQMdxF-wIAzZ3c86r9Wxtw&_nc_ht=scontent-frt3-1.xx&oh=dbcb73bfbd868c3774618cb6e770fb11&oe=5E896CB1"
      }
    }
  ]
};
// const stories = {
//   Original: [
//     {
//       url:
//         "https://r6---sn-4g5e6n7d.c.drive.google.com/videoplayback?expire=1576099671&ei=FyfxXYXVJY-R0AWz54zYCA&ip=192.70.149.204&cp=QVNMWEFfWFZVQlhOOkFmM1Roc005dXpBUTZocEZpQU9Tb3FIUnh5WHVjY1B2cldCc1FXZ2Jwc0o&id=c1016e47c20d3c6a&itag=37&source=webdrive&requiressl=yes&mm=30&mn=sn-4g5e6n7d&ms=nxu&mv=u&mvi=5&pl=24&sc=yes&ttl=transient&susc=dr&driveid=1S_socus1HWJsiIJZUwcxKGA_8sd6J_d1&app=texmex&mime=video/mp4&dur=3.459&lmt=1576084652237461&mt=1576084947&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,dur,lmt&sig=ALgxI2wwRQIgKVHbbMKFtOlnLnM53ohpkYlgZompZCyxRoneJgGRuooCIQC1q1eiEH_D9ZtSiustssyV60-eCcXZfjF8GHTQpbrzBQ==&lsparams=mm,mn,ms,mv,mvi,pl,sc&lsig=AHylml4wRgIhAJhubB4JWSWv27mAzrOSoGwozT-Xm82piuPSxjQVuXm7AiEA9yyMRuClMprvpZyYbxZ5YV4fTy6QuCvq2-CPRV3e0dU=&cpn=cXZvDlUkhryXzJCU&c=WEB_EMBEDDED_PLAYER&cver=20191211",
//       type: "video",
//       seeMore: ({ close }) => (
//         <div style={{ width: "100%", height: "100%" }}>Hello</div>
//       ),
//       header: {
//         heading: "Seunghun Lee",
//         subheading: "Posted 5h ago",
//         profileImage:
//           "https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-1/p480x480/78619450_3511477825559709_2560672000230031360_o.jpg?_nc_cat=109&_nc_ohc=8sw80EBk-gsAQkYAPs8t1feeRW-nD5tnLGGrQMdxF-wIAzZ3c86r9Wxtw&_nc_ht=scontent-frt3-1.xx&oh=dbcb73bfbd868c3774618cb6e770fb11&oe=5E896CB1"
//       }
//     }
//   ],
//   Vintage: [
//     {
//       url:
//         "https://r6---sn-4g5e6n7d.c.drive.google.com/videoplayback?expire=1576099671&ei=FyfxXYXVJY-R0AWz54zYCA&ip=192.70.149.204&cp=QVNMWEFfWFZVQlhOOkFmM1Roc005dXpBUTZocEZpQU9Tb3FIUnh5WHVjY1B2cldCc1FXZ2Jwc0o&id=c1016e47c20d3c6a&itag=37&source=webdrive&requiressl=yes&mm=30&mn=sn-4g5e6n7d&ms=nxu&mv=u&mvi=5&pl=24&sc=yes&ttl=transient&susc=dr&driveid=1S_socus1HWJsiIJZUwcxKGA_8sd6J_d1&app=texmex&mime=video/mp4&dur=3.459&lmt=1576084652237461&mt=1576084947&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,dur,lmt&sig=ALgxI2wwRQIgKVHbbMKFtOlnLnM53ohpkYlgZompZCyxRoneJgGRuooCIQC1q1eiEH_D9ZtSiustssyV60-eCcXZfjF8GHTQpbrzBQ==&lsparams=mm,mn,ms,mv,mvi,pl,sc&lsig=AHylml4wRgIhAJhubB4JWSWv27mAzrOSoGwozT-Xm82piuPSxjQVuXm7AiEA9yyMRuClMprvpZyYbxZ5YV4fTy6QuCvq2-CPRV3e0dU=&cpn=cXZvDlUkhryXzJCU&c=WEB_EMBEDDED_PLAYER&cver=20191211",
//       type: "video",
//       seeMore: ({ close }) => (
//         <div style={{ width: "100%", height: "100%" }}>Hello</div>
//       ),
//       header: {
//         heading: "Seunghun Lee",
//         subheading: "Posted 5h ago",
//         profileImage:
//           "https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-1/p480x480/78619450_3511477825559709_2560672000230031360_o.jpg?_nc_cat=109&_nc_ohc=8sw80EBk-gsAQkYAPs8t1feeRW-nD5tnLGGrQMdxF-wIAzZ3c86r9Wxtw&_nc_ht=scontent-frt3-1.xx&oh=dbcb73bfbd868c3774618cb6e770fb11&oe=5E896CB1"
//       }
//     }
//   ],
//   Rock: [
//     {
//       url:
//         "https://r6---sn-4g5e6n7d.c.drive.google.com/videoplayback?expire=1576099671&ei=FyfxXYXVJY-R0AWz54zYCA&ip=192.70.149.204&cp=QVNMWEFfWFZVQlhOOkFmM1Roc005dXpBUTZocEZpQU9Tb3FIUnh5WHVjY1B2cldCc1FXZ2Jwc0o&id=c1016e47c20d3c6a&itag=37&source=webdrive&requiressl=yes&mm=30&mn=sn-4g5e6n7d&ms=nxu&mv=u&mvi=5&pl=24&sc=yes&ttl=transient&susc=dr&driveid=1S_socus1HWJsiIJZUwcxKGA_8sd6J_d1&app=texmex&mime=video/mp4&dur=3.459&lmt=1576084652237461&mt=1576084947&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,dur,lmt&sig=ALgxI2wwRQIgKVHbbMKFtOlnLnM53ohpkYlgZompZCyxRoneJgGRuooCIQC1q1eiEH_D9ZtSiustssyV60-eCcXZfjF8GHTQpbrzBQ==&lsparams=mm,mn,ms,mv,mvi,pl,sc&lsig=AHylml4wRgIhAJhubB4JWSWv27mAzrOSoGwozT-Xm82piuPSxjQVuXm7AiEA9yyMRuClMprvpZyYbxZ5YV4fTy6QuCvq2-CPRV3e0dU=&cpn=cXZvDlUkhryXzJCU&c=WEB_EMBEDDED_PLAYER&cver=20191211",
//       type: "video",
//       seeMore: ({ close }) => (
//         <div style={{ width: "100%", height: "100%" }}>Hello</div>
//       ),
//       header: {
//         heading: "Seunghun Lee",
//         subheading: "Posted 5h ago",
//         profileImage:
//           "https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-1/p480x480/78619450_3511477825559709_2560672000230031360_o.jpg?_nc_cat=109&_nc_ohc=8sw80EBk-gsAQkYAPs8t1feeRW-nD5tnLGGrQMdxF-wIAzZ3c86r9Wxtw&_nc_ht=scontent-frt3-1.xx&oh=dbcb73bfbd868c3774618cb6e770fb11&oe=5E896CB1"
//       }
//     }
//   ],
//   Space: [
//     {
//       url:
//         "https://r6---sn-4g5e6n7d.c.drive.google.com/videoplayback?expire=1576099671&ei=FyfxXYXVJY-R0AWz54zYCA&ip=192.70.149.204&cp=QVNMWEFfWFZVQlhOOkFmM1Roc005dXpBUTZocEZpQU9Tb3FIUnh5WHVjY1B2cldCc1FXZ2Jwc0o&id=c1016e47c20d3c6a&itag=37&source=webdrive&requiressl=yes&mm=30&mn=sn-4g5e6n7d&ms=nxu&mv=u&mvi=5&pl=24&sc=yes&ttl=transient&susc=dr&driveid=1S_socus1HWJsiIJZUwcxKGA_8sd6J_d1&app=texmex&mime=video/mp4&dur=3.459&lmt=1576084652237461&mt=1576084947&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,dur,lmt&sig=ALgxI2wwRQIgKVHbbMKFtOlnLnM53ohpkYlgZompZCyxRoneJgGRuooCIQC1q1eiEH_D9ZtSiustssyV60-eCcXZfjF8GHTQpbrzBQ==&lsparams=mm,mn,ms,mv,mvi,pl,sc&lsig=AHylml4wRgIhAJhubB4JWSWv27mAzrOSoGwozT-Xm82piuPSxjQVuXm7AiEA9yyMRuClMprvpZyYbxZ5YV4fTy6QuCvq2-CPRV3e0dU=&cpn=cXZvDlUkhryXzJCU&c=WEB_EMBEDDED_PLAYER&cver=20191211",
//       type: "video",
//       seeMore: ({ close }) => (
//         <div style={{ width: "100%", height: "100%" }}>Hello</div>
//       ),
//       header: {
//         heading: "Seunghun Lee",
//         subheading: "Posted 5h ago",
//         profileImage:
//           "https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-1/p480x480/78619450_3511477825559709_2560672000230031360_o.jpg?_nc_cat=109&_nc_ohc=8sw80EBk-gsAQkYAPs8t1feeRW-nD5tnLGGrQMdxF-wIAzZ3c86r9Wxtw&_nc_ht=scontent-frt3-1.xx&oh=dbcb73bfbd868c3774618cb6e770fb11&oe=5E896CB1"
//       }
//     }
//   ]
// };
export default stories;
