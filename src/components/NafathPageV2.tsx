import React, { useState, useEffect } from 'react';
import '../styles/NafathPageV2.css';

type NafathStatus = 'INPUT' | 'WAITING' | 'REJECTED' | 'EXPIRED' | 'ERROR' | 'IDLE';

interface NafathPageV2Props {
  onBack?: () => void;
  onSuccess?: () => void;
}

const NafathPageV2: React.FC<NafathPageV2Props> = ({ onBack, onSuccess }) => {
  const [status, setStatus] = useState<NafathStatus>('INPUT');
  const [nationalId, setNationalId] = useState('');
  const [nationalIdError, setNationalIdError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [randomNumber, setRandomNumber] = useState('');
  const [countdown, setCountdown] = useState(120);
  const [countdownFormatted, setCountdownFormatted] = useState('02:00');
  const [inlineErrorTitleKey, setInlineErrorTitleKey] = useState('');
  const [inlineErrorDescKey, setInlineErrorDescKey] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const isRtl = true;

  const headerComponent = (
    <header className="nafath-header">
      <svg width="765" height="83" viewBox="0 0 765 83" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_23398_17036)">
          <rect x="2" y="28" width="72" height="40" rx="20" fill="white" fillOpacity="0.4" shapeRendering="crispEdges"/>
          <path d="M16.411 53V43.228H22.669V44.628H17.993V47.344H22.235V48.744H17.993V51.6H22.669V53H16.411ZM27.3419 47.596L26.2639 45.524H26.2219V53H24.7099V43.228H26.4739L29.6659 48.632L30.7439 50.704H30.7859V43.228H32.2979V53H30.5339L27.3419 47.596Z" fill="#0D0D0D"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M49.5 58.75C43.5629 58.75 38.75 53.9371 38.75 48C38.75 42.0629 43.5629 37.25 49.5 37.25C55.4371 37.25 60.25 42.0629 60.25 48C60.25 53.9371 55.4371 58.75 49.5 58.75ZM45.544 56.3638C42.5351 54.9381 40.4183 51.9365 40.2596 48.4249C40.9286 48.7735 41.7134 49.0182 42.5888 49.0182C43.2225 49.0182 43.6884 49.0491 44.0349 49.114C44.3803 49.1787 44.5538 49.2678 44.6483 49.3452C44.808 49.4759 44.9584 49.7552 44.9584 50.7518L44.9584 50.8261C44.9584 51.7489 44.9583 52.2972 45.0317 52.7875C45.1072 53.2924 45.2589 53.7272 45.5002 54.4186L45.5202 54.4759C45.8024 55.2847 45.8417 55.8764 45.544 56.3638ZM49.5 57.25C48.6197 57.25 47.7682 57.127 46.9616 56.8974C47.445 55.9043 47.239 54.8487 46.9365 53.9818C46.6695 53.2166 46.5676 52.9162 46.5152 52.5657C46.4604 52.1998 46.4584 51.7708 46.4584 50.7518C46.4584 49.7615 46.3489 48.799 45.5987 48.1846C45.2382 47.8895 44.7943 47.7302 44.3111 47.6397C43.8289 47.5494 43.2549 47.5182 42.5888 47.5182C41.7388 47.5182 40.9689 47.1731 40.339 46.7113C40.8381 43.1311 43.3864 40.207 46.7608 39.1623C46.7388 39.4433 46.7501 39.7242 46.7974 39.9969C46.9348 40.7891 47.3858 41.5355 48.2127 41.9369C48.5279 42.0899 48.6546 42.2444 48.7244 42.3734C48.8081 42.5283 48.8493 42.7158 48.8956 43.0272C48.9006 43.0606 48.9056 43.0953 48.9107 43.1311C48.9958 43.7271 49.1258 44.6371 50.1319 45.2883C50.8114 45.728 51.6618 45.8858 52.563 45.6206C53.4471 45.3604 54.3187 44.7133 55.1314 43.6613C55.6324 43.0129 56.3113 42.6805 56.9629 42.5338C58.0864 44.0652 58.75 45.9551 58.75 48C58.75 48.1156 58.7479 48.2307 58.7437 48.3453C57.8863 48.1416 56.9091 48.2318 55.9357 48.9315C55.0347 49.579 54.3006 49.6346 53.6261 49.6654L53.5337 49.6694C53.2273 49.6823 52.8368 49.6988 52.4892 49.8084C52.0361 49.9513 51.6579 50.242 51.397 50.742C51.0315 51.4425 51.0916 52.0604 51.2894 52.6007C51.3769 52.8394 51.4933 53.0694 51.5917 53.2638L51.5981 53.2765C51.704 53.4857 51.7969 53.67 51.8745 53.8668C52.0207 54.2377 52.1089 54.6461 52.0159 55.1912C51.9348 55.6662 51.7093 56.2833 51.2015 57.0938C50.65 57.1964 50.0812 57.25 49.5 57.25ZM53.1988 56.4809C55.9209 55.292 57.9602 52.8309 58.5651 49.8491C58.0075 49.6707 57.4191 49.7125 56.8111 50.1495C55.5563 51.0514 54.4694 51.1285 53.6945 51.1639C53.2876 51.1824 53.0911 51.1914 52.9404 51.2389C52.8593 51.2645 52.8006 51.2944 52.7268 51.4359C52.5996 51.6797 52.6098 51.8442 52.698 52.0848C52.7516 52.2313 52.8288 52.3865 52.9365 52.5992L52.9444 52.6147C53.0443 52.8122 53.1656 53.0518 53.2701 53.3169C53.4936 53.8841 53.6431 54.5726 53.4945 55.4435C53.4387 55.7704 53.3424 56.1148 53.1988 56.4809ZM48.3411 38.8219C48.2475 39.1422 48.2271 39.4621 48.2754 39.7406C48.3451 40.1426 48.5475 40.432 48.8677 40.5874C49.4324 40.8615 49.8081 41.2239 50.0439 41.6601C50.2658 42.0706 50.3332 42.4968 50.3793 42.8064L50.3832 42.8328C50.4775 43.4669 50.52 43.7527 50.9469 44.029C51.2671 44.2362 51.6662 44.3209 52.1395 44.1816C52.6299 44.0373 53.2577 43.6331 53.9444 42.7443C54.5026 42.0217 55.1934 41.5721 55.8796 41.302C54.2199 39.7207 51.9733 38.75 49.5 38.75C49.1075 38.75 48.7207 38.7744 48.3411 38.8219Z" fill="#0D0D0D"/>
        </g>
        <g filter="url(#filter1_d_23398_17036)">
          <rect x="622" y="16" width="141" height="64" rx="32" fill="white" fillOpacity="0.4" shapeRendering="crispEdges"/>
          <path d="M725.73 24.3925C724.2 25.0794 723.197 26.5505 723.105 28.2276L722.807 34.0032L726.234 34.4726L726.55 28.4108C726.578 27.8556 726.974 27.6152 727.146 27.5408C727.318 27.4663 727.759 27.3232 728.195 27.6724L739.165 36.3844C739.715 36.8194 739.555 37.3632 739.463 37.575C739.371 37.7868 739.085 38.2733 738.391 38.176L726.131 36.4473L722.704 35.9665L709.091 34.049C707.503 33.8257 705.967 34.4382 704.976 35.686L704.959 35.7089C703.967 36.974 703.726 38.6168 704.322 40.1107L715.906 69.1831C716.703 71.175 718.657 72.2855 720.778 71.9363C721.93 71.7474 722.893 71.1693 723.558 70.3336C724.119 69.6295 724.458 68.748 724.509 67.7692L725.822 42.4862L722.394 42.0054L721.065 67.5918C721.024 68.3245 720.457 68.5019 720.216 68.5363C719.976 68.5763 719.379 68.5935 719.11 67.9123L707.526 38.84C707.332 38.3534 707.561 37.9757 707.67 37.8383C707.784 37.6952 708.088 37.3861 708.604 37.4605L722.52 39.4181L730.029 40.4771L737.904 41.5875C739.922 41.8737 741.819 40.8091 742.627 38.9316C743.435 37.0598 742.902 34.9476 741.303 33.6826L730.333 24.9707C729.02 23.9289 727.249 23.7057 725.719 24.3983L725.73 24.3925Z" fill="#1B8354"/>
          <path d="M676.747 55.8018C676.405 55.8018 676.118 55.6853 675.892 55.4577C675.667 55.2302 675.551 54.9415 675.551 54.5974C675.551 54.2533 675.667 53.9536 675.892 53.7261C676.118 53.5041 676.405 53.3931 676.747 53.3931C677.088 53.3931 677.375 53.5041 677.601 53.7261C677.827 53.9481 677.942 54.2367 677.942 54.5974C677.942 54.9582 677.827 55.2302 677.601 55.4577C677.375 55.6853 677.088 55.8018 676.747 55.8018Z" fill="#003235"/>
          <path d="M648.735 58.7213C648.449 58.2717 648.041 57.9387 647.534 57.7278C647.038 57.528 646.404 57.4225 645.644 57.4225C645.176 57.4225 644.696 57.4836 644.217 57.6001C643.737 57.7167 643.291 57.8665 642.878 58.0386C642.53 58.1885 642.227 58.3272 641.979 58.466C641.704 58.1163 641.357 57.8555 640.949 57.6889C640.503 57.5113 639.913 57.417 639.197 57.417C638.827 57.417 638.436 57.4725 638.039 57.5835C637.648 57.6945 637.279 57.8221 636.937 57.9665C636.711 58.0608 636.513 58.1607 636.331 58.2551V57.6279H634V68.7503H636.331V60.1865C636.496 60.1032 636.689 60.0144 636.921 59.9201C637.185 59.8091 637.488 59.7203 637.808 59.6481C638.127 59.5815 638.453 59.5427 638.767 59.5427C639.307 59.5427 639.714 59.6537 639.985 59.8701C640.249 60.0866 640.425 60.4474 640.508 60.9358C640.596 61.463 640.646 62.1845 640.646 63.0892V68.7448H642.977V63.0448C642.977 62.4898 642.96 61.9292 642.922 61.3853C642.889 60.908 642.834 60.4973 642.751 60.1643C642.911 60.0866 643.109 60.0033 643.335 59.9145C643.622 59.8035 643.941 59.7147 644.277 59.6426C644.613 59.576 644.95 59.5371 645.28 59.5371C645.837 59.5371 646.245 59.6481 646.504 59.8646C646.763 60.081 646.939 60.4363 647.033 60.9247C647.132 61.4408 647.181 62.1512 647.181 63.0226V68.7448H649.49V62.895C649.49 61.9181 649.435 61.0801 649.331 60.403C649.22 59.7147 649.022 59.1431 648.741 58.7046L648.735 58.7213Z" fill="#003235"/>
          <path d="M660.786 58.0495C660.081 57.6333 659.122 57.4224 657.943 57.4224C656.764 57.4224 655.827 57.6333 655.116 58.0495C654.394 58.4713 653.865 59.104 653.546 59.9421C653.231 60.7635 653.077 61.8181 653.077 63.0779C653.077 64.3378 653.226 65.4978 653.512 66.3581C653.81 67.2405 654.323 67.9065 655.039 68.3339C655.744 68.7557 656.725 68.9722 657.943 68.9722C659.161 68.9722 660.164 68.7557 660.869 68.3339C661.586 67.9065 662.098 67.2405 662.385 66.3581C662.666 65.4978 662.809 64.3933 662.809 63.0779C662.809 61.7626 662.649 60.758 662.34 59.9421C662.021 59.104 661.497 58.4658 660.781 58.0495H660.786ZM659.552 66.5523C659.199 66.8021 658.659 66.9297 657.943 66.9297C657.227 66.9297 656.67 66.8021 656.323 66.5523C655.981 66.3081 655.75 65.9029 655.634 65.3535C655.507 64.7707 655.447 64.0104 655.447 63.0779C655.447 62.1455 655.524 61.4351 655.673 60.8967C655.816 60.3917 656.069 60.0198 656.422 59.8034C656.786 59.5758 657.298 59.4648 657.943 59.4648C658.588 59.4648 659.122 59.5814 659.475 59.8034C659.822 60.0254 660.07 60.3917 660.213 60.8967C660.362 61.4295 660.439 62.1622 660.439 63.0779C660.439 63.9937 660.379 64.7707 660.252 65.3535C660.136 65.9029 659.899 66.3026 659.552 66.5523Z" fill="#003235"/>
          <path d="M672.32 66.7578C672.149 66.7745 671.951 66.7911 671.719 66.8133C671.493 66.8355 671.273 66.8466 671.069 66.8577C670.865 66.8633 670.689 66.8688 670.54 66.8688C670.154 66.8688 669.873 66.8022 669.708 66.669C669.543 66.5414 669.432 66.2972 669.377 65.9475C669.317 65.5645 669.284 65.0206 669.284 64.3324V59.687H672.463V57.6445H669.284V54.481H666.975V57.6445H665.525V59.687H666.975V64.893C666.975 65.9419 667.074 66.7634 667.272 67.3461C667.476 67.9566 667.829 68.3895 668.319 68.6393C668.788 68.878 669.421 69.0001 670.204 69.0001C670.391 69.0001 670.628 68.9834 670.904 68.9557C671.174 68.9279 671.455 68.8946 671.73 68.8558C672.011 68.8169 672.265 68.7781 672.48 68.7337L672.629 68.7059L672.502 66.7467L672.325 66.7634L672.32 66.7578Z" fill="#003235"/>
          <path d="M677.914 57.6387H675.583V68.7611H677.914V57.6387Z" fill="#003235"/>
          <path d="M697.349 60.4196C697.239 59.7314 697.041 59.1597 696.76 58.7213C696.473 58.2717 696.065 57.9387 695.558 57.7278C695.063 57.528 694.429 57.4225 693.668 57.4225C693.2 57.4225 692.721 57.4836 692.241 57.6001C691.762 57.7167 691.315 57.8665 690.902 58.0386C690.555 58.1885 690.252 58.3272 690.004 58.466C689.728 58.1163 689.381 57.8555 688.973 57.6889C688.527 57.5113 687.937 57.417 687.221 57.417C686.852 57.417 686.46 57.4725 686.064 57.5835C685.672 57.6945 685.303 57.8221 684.962 57.9665C684.736 58.0608 684.537 58.1607 684.355 58.2551V57.6279H682.024V68.7503H684.355V60.1865C684.521 60.1032 684.714 60.0144 684.945 59.9201C685.21 59.8091 685.513 59.7203 685.832 59.6481C686.152 59.5815 686.477 59.5427 686.791 59.5427C687.331 59.5427 687.739 59.6537 688.009 59.8701C688.273 60.0866 688.45 60.4474 688.538 60.9358C688.626 61.463 688.676 62.1845 688.676 63.0892V68.7448H691.007V63.0448C691.007 62.4898 690.99 61.9292 690.952 61.3853C690.919 60.908 690.863 60.4973 690.781 60.1643C690.941 60.0866 691.139 60.0033 691.365 59.9145C691.651 59.8035 691.971 59.7147 692.307 59.6426C692.643 59.576 692.98 59.5371 693.31 59.5371C693.867 59.5371 694.274 59.6481 694.533 59.8646C694.792 60.081 694.969 60.4363 695.063 60.9247C695.162 61.4408 695.211 62.1512 695.211 63.0226V68.7448H697.52V62.895C697.52 61.9181 697.465 61.0801 697.36 60.403L697.349 60.4196Z" fill="#003235"/>
          <path d="M697.482 41.1105C697.14 40.2058 696.572 39.5176 695.801 39.068C695.04 38.624 694.026 38.3965 692.77 38.3965C691.514 38.3965 690.522 38.624 689.756 39.068C688.973 39.5232 688.406 40.2114 688.058 41.1105C687.728 41.9763 687.557 43.0919 687.557 44.4239C687.557 44.9845 687.59 45.4951 687.64 45.9779C687.458 46.2776 687.287 46.5496 687.138 46.7605C686.912 47.0769 686.681 47.3155 686.449 47.4765C686.223 47.6319 685.953 47.7429 685.65 47.8039C685.331 47.865 684.912 47.8983 684.416 47.8983H680.459C679.919 47.8594 679.451 47.7595 679.065 47.5986C678.773 47.482 678.514 47.3211 678.288 47.1213C678.255 47.0214 678.228 46.9104 678.205 46.7938C678.128 46.3942 678.084 45.8891 678.062 45.2897C678.062 45.2897 678.062 45.2842 678.062 45.2786C678.062 45.1066 678.068 44.929 678.068 44.7458V38.5796H678.051H676.547H675.439V44.7458C675.439 44.929 675.439 45.1066 675.445 45.2842C675.434 45.7171 675.401 46.1 675.362 46.4331C675.345 46.5663 675.323 46.6884 675.307 46.8049C675.285 46.9215 675.257 47.0269 675.23 47.1268C675.004 47.3266 674.739 47.4876 674.442 47.6097C674.056 47.7651 673.588 47.865 673.048 47.9094H652.085V47.9316L647.787 47.9371C647.291 47.9371 646.872 47.9038 646.553 47.8428C646.249 47.7817 645.979 47.6707 645.753 47.5153C645.522 47.3544 645.291 47.1157 645.065 46.7994C644.828 46.4719 644.558 46.0334 644.26 45.5006C644.282 45.1565 644.299 44.8013 644.299 44.4239C644.299 43.103 644.133 41.993 643.803 41.1327C643.461 40.2447 642.905 39.5676 642.15 39.118C641.4 38.6795 640.392 38.4575 639.152 38.4575C637.912 38.4575 636.926 38.6795 636.171 39.118C635.405 39.562 634.842 40.2391 634.501 41.1327C634.17 41.993 634.005 43.103 634.005 44.4239C634.005 44.929 634.032 45.3952 634.077 45.8392V55.1856H636.689V50.2515C637.355 50.5068 638.182 50.64 639.152 50.64C640.452 50.64 641.488 50.4125 642.238 49.9685C642.745 49.6688 643.141 49.2414 643.45 48.7252C643.753 49.1471 644.078 49.4912 644.42 49.7465C644.833 50.0517 645.318 50.2682 645.869 50.3958C646.404 50.5179 647.054 50.579 647.792 50.579H667.912V50.5512H673.962C673.962 50.5512 673.968 50.5512 673.973 50.5512C673.979 50.5512 673.984 50.5512 673.995 50.5512C674.783 50.5512 675.45 50.4402 675.974 50.2293C676.271 50.1072 676.536 49.9463 676.767 49.7409C676.999 49.9407 677.258 50.1072 677.555 50.2238C678.046 50.4236 678.674 50.529 679.407 50.5401H684.427C685.165 50.5401 685.816 50.4791 686.35 50.357C686.901 50.2293 687.386 50.0129 687.799 49.7076C688.069 49.5078 688.323 49.2525 688.571 48.9528C688.868 49.3913 689.238 49.7576 689.69 50.024C690.45 50.4791 691.492 50.7066 692.787 50.7066C694.082 50.7066 695.145 50.4791 695.906 50.024C696.683 49.5578 697.234 48.8418 697.548 47.8872C697.845 46.977 698 45.817 698 44.4295C698 43.0419 697.834 41.9819 697.498 41.116L697.482 41.1105ZM641.45 46.7605C641.334 47.31 641.097 47.7096 640.755 47.9538C640.403 48.2035 639.857 48.3312 639.13 48.3312C638.402 48.3312 637.84 48.2035 637.499 47.9538C637.162 47.7096 636.931 47.31 636.815 46.7605C636.689 46.1611 636.622 45.373 636.622 44.4128C636.622 43.4526 636.7 42.72 636.854 42.1706C636.997 41.66 637.24 41.3047 637.592 41.0827C637.956 40.8552 638.474 40.7442 639.13 40.7442C639.786 40.7442 640.32 40.8607 640.678 41.0827C641.025 41.2992 641.262 41.66 641.411 42.1706C641.565 42.72 641.643 43.4748 641.643 44.4128C641.643 45.3508 641.576 46.1611 641.45 46.7605ZM695.217 44.4239C695.217 45.3785 695.151 46.1666 695.024 46.755C694.908 47.2933 694.688 47.6707 694.357 47.9094C694.015 48.1536 693.481 48.2757 692.77 48.2757C692.059 48.2757 691.508 48.1536 691.177 47.9149C690.858 47.6818 690.632 47.2933 690.522 46.7605C690.395 46.1666 690.329 45.3841 690.329 44.4295C690.329 43.4748 690.406 42.7478 690.56 42.2094C690.704 41.7155 690.935 41.3713 691.271 41.1604C691.624 40.9384 692.131 40.8274 692.776 40.8274C693.42 40.8274 693.944 40.9384 694.285 41.1549C694.616 41.3658 694.847 41.7099 694.985 42.2039C695.14 42.7478 695.217 43.4915 695.217 44.4239Z" fill="#003235"/>
          <path d="M678.013 37.4088C678.355 37.4088 678.641 37.2922 678.867 37.0646C679.093 36.8371 679.209 36.5485 679.209 36.2044C679.209 35.8603 679.093 35.555 678.867 35.333C678.641 35.111 678.355 35 678.013 35C677.672 35 677.385 35.111 677.159 35.333C676.933 35.555 676.817 35.8436 676.817 36.2044C676.817 36.5651 676.933 36.8371 677.159 37.0646C677.385 37.2922 677.672 37.4088 678.013 37.4088Z" fill="#003235"/>
          <path d="M675.153 37.4088C675.494 37.4088 675.781 37.2922 676.007 37.0646C676.233 36.8371 676.349 36.5485 676.349 36.2044C676.349 35.8603 676.233 35.555 676.007 35.333C675.781 35.111 675.494 35 675.153 35C674.811 35 674.525 35.111 674.299 35.333C674.073 35.555 673.957 35.8436 673.957 36.2044C673.957 36.5651 674.073 36.8371 674.299 37.0646C674.525 37.2922 674.811 37.4088 675.153 37.4088Z" fill="#003235"/>
        </g>
        <rect x="461" y="16" width="149" height="64" rx="32" fill="white" fillOpacity="0.4"/>
        <image href="/motim-demo/logos/SaudiChambersLogo.png" x="467" y="21" width="137" height="54" preserveAspectRatio="xMidYMid meet"/>
        <defs>
          <filter id="filter0_d_23398_17036" x="0" y="27" width="76" height="44" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="1"/>
            <feGaussianBlur stdDeviation="1"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_23398_17036"/>
            <feBlend mode="normal" in="BackgroundImageFix" in2="effect1_dropShadow_23398_17036" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          </filter>
          <filter id="filter1_d_23398_17036" x="620" y="15" width="145" height="68" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="1"/>
            <feGaussianBlur stdDeviation="1"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_23398_17036"/>
            <feBlend mode="normal" in="BackgroundImageFix" in2="effect1_dropShadow_23398_17036" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          </filter>
        </defs>
      </svg>
    </header>
  );

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (status === 'WAITING' && countdown > 0) {
      interval = setInterval(() => {
        setCountdown(prev => {
          const newValue = prev - 1;
          const minutes = Math.floor(newValue / 60);
          const seconds = newValue % 60;
          setCountdownFormatted(
            `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
          );

          if (newValue === 0) {
            setStatus('EXPIRED');
            clearInterval(interval);
          }

          return newValue;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [status, countdown]);

  useEffect(() => {
    if (status === 'WAITING') {
      const timer = setTimeout(() => {
        if (onSuccess) {
          onSuccess();
        } else {
          window.location.href = 'https://khalshehri.github.io/motim-demo?page=nafath-delegation-review';
        }
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [status, onSuccess]);

  const validateNationalId = (id: string): boolean => {
    if (!id) {
      setNationalIdError('يرجى إدخال رقم هويتك الوطنية');
      return false;
    }
    if (id.length !== 10) {
      setNationalIdError('يجب أن يكون رقم الهوية الوطنية 10 أرقام');
      return false;
    }
    if (!/^\d+$/.test(id)) {
      setNationalIdError('يجب أن يحتوي رقم الهوية الوطنية على أرقام فقط');
      return false;
    }
    setNationalIdError('');
    return true;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNationalId(value);
    if (nationalIdError) {
      validateNationalId(value);
    }
  };

  const generateRandomNumber = (): string => {
    return Math.floor(10 + Math.random() * 90).toString();
  };

  const handleVerify = async () => {
    if (!validateNationalId(nationalId)) {
      return;
    }

    setIsLoading(true);
    setInlineErrorTitleKey('');
    setInlineErrorDescKey('');

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));

      const randomNum = generateRandomNumber();
      setRandomNumber(randomNum);
      setCountdown(120);
      setCountdownFormatted('02:00');
      setStatus('WAITING');
      setIsLoading(false);
    } catch (error) {
      setStatus('ERROR');
      setErrorMessage(error instanceof Error ? error.message : 'حدث خطأ أثناء التحقق.');
      console.error('Nafath verification error:', error);
      setIsLoading(false);
    }
  };

  const handleRetry = () => {
    setNationalId('');
    setStatus('INPUT');
    setInlineErrorTitleKey('');
    setInlineErrorDescKey('');
    setErrorMessage('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !isLoading && nationalId) {
      handleVerify();
    }
  };

  return (
    <div className="nafath-page-v2">
      {headerComponent}

      <main className="nafath-main-v2">
        <div className="nafath-container">
          <div className="content-wrapper">
            <h1 className="page-title"> طلب تفويض جديد</h1>
            <p className="page-subtitle">يرجى مراجعة تفاصيل طلب التفويض أدناه قبل الموافقة.</p>

        {/* Error Toast */}
        {inlineErrorTitleKey && (
          <div className="inline-error-toast">
            <div className="toast-accent"></div>
            <div className="toast-content">
              <div className="toast-icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M6.86 2.57L1.21 12a1.33 1.33 0 0 0 1.14 2h11.3a1.33 1.33 0 0 0 1.14-2L9.14 2.57a1.33 1.33 0 0 0-2.28 0Z"
                    stroke="#8B0E18"
                    strokeWidth="1.33"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 6v2.67M8 11.33h.007"
                    stroke="#8B0E18"
                    strokeWidth="1.33"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="toast-text">
                <h3 className="toast-title">{inlineErrorTitleKey}</h3>
                <p className="toast-description">{inlineErrorDescKey}</p>
              </div>
            </div>
          </div>
        )}

        {/* Input State */}
        {(status === 'INPUT' || (status === 'IDLE' && isLoading)) && (
          <div className="nafath-card">
            <div className="card-body">
              <h2 className="nafath-large-title">نفاذ</h2>
              <h2 className="card-title text-center">التحقق من الهوية عبر نظام نفاذ</h2>
              <p className="card-description text-center">
              أدخل رقم الهوية الوطنية أو الإقامة للتحقق من هويتك
              </p>

              <div className="input-group">
                <label className="input-label" htmlFor="nationalId">
                  رقم الهوية الوطنية
                </label>
                <input
                  id="nationalId"
                  type="text"
                  className={`input-field ${nationalIdError ? 'input-error' : ''}`}
                  value={nationalId}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  placeholder="مثال: 1XXXXXXXXX"
                  maxLength={10}
                  inputMode="numeric"
                  disabled={isLoading}
                />
                {nationalIdError && <p className="error-text">{nationalIdError}</p>}
              </div>

              <button
                className={`btn-primary btn-full ${isLoading ? 'btn-loading' : ''}`}
                disabled={isLoading}
                onClick={handleVerify}
              >
                {!isLoading ? (
                  'تحقق'
                ) : (
                  <>
                    <svg className="btn-spinner" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" opacity="0.3" />
                      <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <span>جاري البدء...</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {/* Waiting State */}
        {status === 'WAITING' && !isLoading && (
          <div className="nafath-card">
            <div className="card-body text-center">
              <h2 className="nafath-large-title">نفاذ</h2>
              <h2 className="card-title">في انتظار التأكيد</h2>
              <p className="card-description">
                تم إرسال إشعار إلى جهازك المسجل. يرجى الموافقة على الطلب في تطبيق نفاذ.
              </p>

              <div className="random-number-display">
                <span className="random-number">{randomNumber}</span>
              </div>

              <p className="countdown-text">الوقت المتبقي: {countdownFormatted}</p>

              <div className="polling-indicator">
                <span className="pulse-dot"></span>
                <span>في انتظار التأكيد...</span>
              </div>
            </div>
          </div>
        )}

        {/* Rejected State */}
        {status === 'REJECTED' && (
          <div className="nafath-card error">
            <div className="card-body text-center">
              <div className="status-icon error-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="15" y1="9" x2="9" y2="15" />
                  <line x1="9" y1="9" x2="15" y2="15" />
                </svg>
              </div>
              <h2 className="card-title error-text">تم رفض التحقق</h2>
              <p className="card-description">
                تم رفض طلب التحقق الخاص بك. يرجى المحاولة مرة أخرى أو الاتصال بالدعم.
              </p>
              <button className="btn-primary" onClick={handleRetry}>
                حاول مرة أخرى
              </button>
            </div>
          </div>
        )}

        {/* Expired State */}
        {status === 'EXPIRED' && (
          <div className="nafath-card error">
            <div className="card-body text-center">
              <div className="status-icon warning-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h2 className="card-title warning-text">انتهت صلاحية الطلب</h2>
              <p className="card-description">
                انتهت صلاحية طلب التحقق الخاص بك. يرجى المحاولة مرة أخرى.
              </p>
              <button className="btn-primary" onClick={handleRetry}>
                حاول مرة أخرى
              </button>
            </div>
          </div>
        )}

        {/* Error State */}
        {status === 'ERROR' && (
          <div className="nafath-card error">
            <div className="card-body text-center">
              <div className="status-icon error-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                  <line x1="12" y1="9" x2="12" y2="13" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
              </div>
              <h2 className="card-title error-text">خطأ</h2>
              <p className="card-description">{errorMessage || 'حدث خطأ أثناء التحقق.'}</p>
              <button className="btn-primary" onClick={handleRetry}>
                حاول مرة أخرى
              </button>
            </div>
          </div>
        )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default NafathPageV2;
