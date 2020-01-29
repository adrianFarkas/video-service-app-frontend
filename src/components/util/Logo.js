import React, {useContext} from 'react';
import styled from "styled-components";
import {ThemeContext} from "../../contexts/ThemeContext";

const Path = styled.path`
    fill: ${props => props.fill};
    transition: all .5s;
`;

const App = styled(Path)`
    fill: ${props => props.fill};
`;

const Svg = styled.svg`
    width: 200px;
    height: 55px;
    filter: drop-shadow(1px 2px 2px ${props => props.shadow});
`;

function Logo() {
    const {theme} = useContext(ThemeContext);

    return (
        <Svg viewBox="0 0 224 52" fill="none" shadow={theme.logoShadow} xmlns="http://www.w3.org/2000/svg">
            <Path fill={theme.syntax} d="M57.0137 33H47.8535C47.6191 33 47.3652 32.974 47.0918 32.9219C46.8249 32.8633 46.5579 32.7754 46.291 32.6582C46.0306 32.541 45.7799 32.3913 45.5391 32.209C45.2982 32.0202 45.0833 31.7956 44.8945 31.5352C44.7122 31.2682 44.5658 30.9622 44.4551 30.6172C44.3444 30.2656 44.2891 29.8717 44.2891 29.4355V22.5605C44.2891 22.3262 44.3151 22.0755 44.3672 21.8086C44.4258 21.5352 44.5137 21.2682 44.6309 21.0078C44.748 20.7409 44.901 20.487 45.0898 20.2461C45.2786 20.0052 45.5033 19.7936 45.7637 19.6113C46.0306 19.4225 46.3366 19.2728 46.6816 19.1621C47.0267 19.0514 47.4173 18.9961 47.8535 18.9961H57.0137V21.5352H47.8535C47.5215 21.5352 47.2676 21.623 47.0918 21.7988C46.916 21.9746 46.8281 22.235 46.8281 22.5801V29.4355C46.8281 29.7611 46.916 30.015 47.0918 30.1973C47.2741 30.373 47.528 30.4609 47.8535 30.4609H57.0137V33Z"/>
            <Path fill={theme.syntax} d="M73.8984 27.3359C73.8984 28.1888 73.752 28.9733 73.459 29.6895C73.166 30.4056 72.7591 31.0241 72.2383 31.5449C71.7174 32.0658 71.099 32.4727 70.3828 32.7656C69.6732 33.0521 68.8984 33.1953 68.0586 33.1953H64.6211C63.7812 33.1953 63.0033 33.0521 62.2871 32.7656C61.571 32.4727 60.9525 32.0658 60.4316 31.5449C59.9108 31.0241 59.5007 30.4056 59.2012 29.6895C58.9082 28.9733 58.7617 28.1888 58.7617 27.3359V24.6602C58.7617 23.8138 58.9082 23.0326 59.2012 22.3164C59.5007 21.5938 59.9108 20.9753 60.4316 20.4609C60.9525 19.9401 61.571 19.5332 62.2871 19.2402C63.0033 18.9473 63.7812 18.8008 64.6211 18.8008H68.0586C68.8984 18.8008 69.6732 18.9473 70.3828 19.2402C71.099 19.5332 71.7174 19.9401 72.2383 20.4609C72.7591 20.9753 73.166 21.5938 73.459 22.3164C73.752 23.0326 73.8984 23.8138 73.8984 24.6602V27.3359ZM71.3594 24.6602C71.3594 24.1589 71.278 23.7064 71.1152 23.3027C70.959 22.8926 70.7344 22.5443 70.4414 22.2578C70.1549 21.9648 69.8066 21.7402 69.3965 21.584C68.9928 21.4212 68.5469 21.3398 68.0586 21.3398H64.6211C64.1263 21.3398 63.6738 21.4212 63.2637 21.584C62.86 21.7402 62.5117 21.9648 62.2188 22.2578C61.9258 22.5443 61.6979 22.8926 61.5352 23.3027C61.3789 23.7064 61.3008 24.1589 61.3008 24.6602V27.3359C61.3008 27.8372 61.3789 28.293 61.5352 28.7031C61.6979 29.1068 61.9258 29.4551 62.2188 29.748C62.5117 30.0345 62.86 30.2591 63.2637 30.4219C63.6738 30.5781 64.1263 30.6562 64.6211 30.6562H68.0391C68.5339 30.6562 68.9831 30.5781 69.3867 30.4219C69.7969 30.2591 70.1484 30.0345 70.4414 29.748C70.7344 29.4551 70.959 29.1068 71.1152 28.7031C71.278 28.293 71.3594 27.8372 71.3594 27.3359V24.6602Z"/>
            <Path fill={theme.syntax} d="M91.1055 27.3359C91.1055 28.1888 90.959 28.9733 90.666 29.6895C90.373 30.4056 89.9661 31.0241 89.4453 31.5449C88.9245 32.0658 88.306 32.4727 87.5898 32.7656C86.8802 33.0521 86.1055 33.1953 85.2656 33.1953H81.8281C80.9883 33.1953 80.2103 33.0521 79.4941 32.7656C78.778 32.4727 78.1595 32.0658 77.6387 31.5449C77.1178 31.0241 76.7077 30.4056 76.4082 29.6895C76.1152 28.9733 75.9688 28.1888 75.9688 27.3359V24.6602C75.9688 23.8138 76.1152 23.0326 76.4082 22.3164C76.7077 21.5938 77.1178 20.9753 77.6387 20.4609C78.1595 19.9401 78.778 19.5332 79.4941 19.2402C80.2103 18.9473 80.9883 18.8008 81.8281 18.8008H85.2656C86.1055 18.8008 86.8802 18.9473 87.5898 19.2402C88.306 19.5332 88.9245 19.9401 89.4453 20.4609C89.9661 20.9753 90.373 21.5938 90.666 22.3164C90.959 23.0326 91.1055 23.8138 91.1055 24.6602V27.3359ZM88.5664 24.6602C88.5664 24.1589 88.485 23.7064 88.3223 23.3027C88.166 22.8926 87.9414 22.5443 87.6484 22.2578C87.362 21.9648 87.0137 21.7402 86.6035 21.584C86.1999 21.4212 85.7539 21.3398 85.2656 21.3398H81.8281C81.3333 21.3398 80.8809 21.4212 80.4707 21.584C80.0671 21.7402 79.7188 21.9648 79.4258 22.2578C79.1328 22.5443 78.9049 22.8926 78.7422 23.3027C78.5859 23.7064 78.5078 24.1589 78.5078 24.6602V27.3359C78.5078 27.8372 78.5859 28.293 78.7422 28.7031C78.9049 29.1068 79.1328 29.4551 79.4258 29.748C79.7188 30.0345 80.0671 30.2591 80.4707 30.4219C80.8809 30.5781 81.3333 30.6562 81.8281 30.6562H85.2461C85.7409 30.6562 86.1901 30.5781 86.5938 30.4219C87.0039 30.2591 87.3555 30.0345 87.6484 29.748C87.9414 29.4551 88.166 29.1068 88.3223 28.7031C88.485 28.293 88.5664 27.8372 88.5664 27.3359V24.6602Z"/>
            <Path fill={theme.syntax} d="M106.477 33H94.8945C94.7122 33 94.543 32.9674 94.3867 32.9023C94.2305 32.8372 94.0938 32.7493 93.9766 32.6387C93.8659 32.5215 93.778 32.3848 93.7129 32.2285C93.6478 32.0723 93.6152 31.903 93.6152 31.7207V18.9961H96.1543V30.4609H106.477V33Z"/>
            <Path fill={theme.syntax} d="M120.637 18.9961L114.006 32.502C113.902 32.7103 113.745 32.8763 113.537 33C113.335 33.1302 113.111 33.1953 112.863 33.1953C112.622 33.1953 112.398 33.1302 112.189 33C111.988 32.8763 111.831 32.7103 111.721 32.502L105.1 18.9961H107.941L112.863 29.084L117.805 18.9961H120.637Z"/>
            <Path fill={theme.syntax} d="M124.631 33H122.092V18.9961H124.631V33Z"/>
            <Path fill={theme.syntax} d="M141.574 27.1406C141.574 27.9935 141.424 28.778 141.125 29.4941C140.832 30.2103 140.425 30.8288 139.904 31.3496C139.383 31.8639 138.765 32.2676 138.049 32.5605C137.333 32.8535 136.555 33 135.715 33H128.859C128.677 33 128.508 32.9674 128.352 32.9023C128.195 32.8372 128.059 32.7493 127.941 32.6387C127.831 32.5215 127.743 32.3848 127.678 32.2285C127.613 32.0723 127.58 31.903 127.58 31.7207V20.2754C127.58 20.0996 127.613 19.9336 127.678 19.7773C127.743 19.6211 127.831 19.4844 127.941 19.3672C128.059 19.25 128.195 19.1589 128.352 19.0938C128.508 19.0286 128.677 18.9961 128.859 18.9961H135.715C136.555 18.9961 137.333 19.1426 138.049 19.4355C138.765 19.7285 139.383 20.1354 139.904 20.6562C140.425 21.1706 140.832 21.7891 141.125 22.5117C141.424 23.2279 141.574 24.0091 141.574 24.8555V27.1406ZM139.035 24.8555C139.035 24.3607 138.954 23.9082 138.791 23.498C138.635 23.0879 138.41 22.7396 138.117 22.4531C137.824 22.1602 137.473 21.9355 137.062 21.7793C136.659 21.6165 136.21 21.5352 135.715 21.5352H130.119V30.4609H135.715C136.21 30.4609 136.659 30.3828 137.062 30.2266C137.473 30.0638 137.824 29.8392 138.117 29.5527C138.41 29.2598 138.635 28.9115 138.791 28.5078C138.954 28.0977 139.035 27.6419 139.035 27.1406V24.8555Z"/>
            <Path fill={theme.syntax} d="M155.578 27.2773H147.561V24.7188H155.578V27.2773ZM156.721 33H147.561C147.209 33 146.825 32.9382 146.408 32.8145C145.992 32.6908 145.604 32.4889 145.246 32.209C144.895 31.9225 144.598 31.5547 144.357 31.1055C144.123 30.6497 144.006 30.0931 144.006 29.4355V20.2754C144.006 20.0996 144.038 19.9336 144.104 19.7773C144.169 19.6211 144.257 19.4844 144.367 19.3672C144.484 19.25 144.621 19.1589 144.777 19.0938C144.934 19.0286 145.103 18.9961 145.285 18.9961H156.721V21.5352H146.545V29.4355C146.545 29.7676 146.633 30.0215 146.809 30.1973C146.984 30.373 147.242 30.4609 147.58 30.4609H156.721V33Z"/>
            <Path fill={theme.syntax} d="M173.723 27.3359C173.723 28.1888 173.576 28.9733 173.283 29.6895C172.99 30.4056 172.583 31.0241 172.062 31.5449C171.542 32.0658 170.923 32.4727 170.207 32.7656C169.497 33.0521 168.723 33.1953 167.883 33.1953H164.445C163.605 33.1953 162.827 33.0521 162.111 32.7656C161.395 32.4727 160.777 32.0658 160.256 31.5449C159.735 31.0241 159.325 30.4056 159.025 29.6895C158.732 28.9733 158.586 28.1888 158.586 27.3359V24.6602C158.586 23.8138 158.732 23.0326 159.025 22.3164C159.325 21.5938 159.735 20.9753 160.256 20.4609C160.777 19.9401 161.395 19.5332 162.111 19.2402C162.827 18.9473 163.605 18.8008 164.445 18.8008H167.883C168.723 18.8008 169.497 18.9473 170.207 19.2402C170.923 19.5332 171.542 19.9401 172.062 20.4609C172.583 20.9753 172.99 21.5938 173.283 22.3164C173.576 23.0326 173.723 23.8138 173.723 24.6602V27.3359ZM171.184 24.6602C171.184 24.1589 171.102 23.7064 170.939 23.3027C170.783 22.8926 170.559 22.5443 170.266 22.2578C169.979 21.9648 169.631 21.7402 169.221 21.584C168.817 21.4212 168.371 21.3398 167.883 21.3398H164.445C163.951 21.3398 163.498 21.4212 163.088 21.584C162.684 21.7402 162.336 21.9648 162.043 22.2578C161.75 22.5443 161.522 22.8926 161.359 23.3027C161.203 23.7064 161.125 24.1589 161.125 24.6602V27.3359C161.125 27.8372 161.203 28.293 161.359 28.7031C161.522 29.1068 161.75 29.4551 162.043 29.748C162.336 30.0345 162.684 30.2591 163.088 30.4219C163.498 30.5781 163.951 30.6562 164.445 30.6562H167.863C168.358 30.6562 168.807 30.5781 169.211 30.4219C169.621 30.2591 169.973 30.0345 170.266 29.748C170.559 29.4551 170.783 29.1068 170.939 28.7031C171.102 28.293 171.184 27.8372 171.184 27.3359V24.6602Z"/>
            <App fill={theme.transparentSyntax} className="logo-end" d="M189.973 33H187.434V29.5625H178.508V33H175.969V25.998C175.969 24.9759 176.145 24.0352 176.496 23.1758C176.848 22.3164 177.336 21.5775 177.961 20.959C178.586 20.3405 179.325 19.8587 180.178 19.5137C181.031 19.1686 181.962 18.9961 182.971 18.9961H188.693C188.869 18.9961 189.035 19.0286 189.191 19.0938C189.348 19.1589 189.484 19.25 189.602 19.3672C189.719 19.4844 189.81 19.6211 189.875 19.7773C189.94 19.9336 189.973 20.0996 189.973 20.2754V33ZM178.508 27.0234H187.434V21.5352H182.971C182.893 21.5352 182.727 21.5482 182.473 21.5742C182.225 21.5938 181.936 21.6491 181.604 21.7402C181.278 21.8314 180.933 21.9714 180.568 22.1602C180.204 22.349 179.868 22.6094 179.562 22.9414C179.257 23.2734 179.003 23.6901 178.801 24.1914C178.605 24.6862 178.508 25.2884 178.508 25.998V27.0234Z"/>
            <App fill={theme.transparentSyntax} className="logo-end" d="M206.887 24.8555C206.887 25.4349 206.815 25.9525 206.672 26.4082C206.529 26.8639 206.333 27.2676 206.086 27.6191C205.845 27.9642 205.565 28.2604 205.246 28.5078C204.927 28.7552 204.592 28.957 204.24 29.1133C203.895 29.2695 203.544 29.3835 203.186 29.4551C202.834 29.5267 202.502 29.5625 202.189 29.5625H196.447V27.0234H202.189C202.515 26.9974 202.808 26.9323 203.068 26.8281C203.335 26.7174 203.563 26.571 203.752 26.3887C203.941 26.2064 204.087 25.9883 204.191 25.7344C204.296 25.474 204.348 25.181 204.348 24.8555V23.7031C204.315 23.3841 204.247 23.0911 204.143 22.8242C204.038 22.5573 203.895 22.3294 203.713 22.1406C203.537 21.9518 203.322 21.8053 203.068 21.7012C202.814 21.5905 202.521 21.5352 202.189 21.5352H196.467C196.128 21.5352 195.871 21.623 195.695 21.7988C195.52 21.9746 195.432 22.2285 195.432 22.5605V33H192.893V22.5605C192.893 21.9095 193.01 21.3561 193.244 20.9004C193.485 20.4447 193.781 20.0768 194.133 19.7969C194.491 19.5169 194.878 19.3151 195.295 19.1914C195.712 19.0612 196.096 18.9961 196.447 18.9961H202.189C202.762 18.9961 203.277 19.071 203.732 19.2207C204.188 19.3639 204.589 19.5592 204.934 19.8066C205.285 20.0475 205.581 20.3275 205.822 20.6465C206.07 20.9655 206.271 21.3008 206.428 21.6523C206.59 21.9974 206.708 22.349 206.779 22.707C206.851 23.0586 206.887 23.3906 206.887 23.7031V24.8555Z"/>
            <App fill={theme.transparentSyntax} className="logo-end" d="M223.02 24.8555C223.02 25.4349 222.948 25.9525 222.805 26.4082C222.661 26.8639 222.466 27.2676 222.219 27.6191C221.978 27.9642 221.698 28.2604 221.379 28.5078C221.06 28.7552 220.725 28.957 220.373 29.1133C220.028 29.2695 219.676 29.3835 219.318 29.4551C218.967 29.5267 218.635 29.5625 218.322 29.5625H212.58V27.0234H218.322C218.648 26.9974 218.941 26.9323 219.201 26.8281C219.468 26.7174 219.696 26.571 219.885 26.3887C220.074 26.2064 220.22 25.9883 220.324 25.7344C220.428 25.474 220.48 25.181 220.48 24.8555V23.7031C220.448 23.3841 220.38 23.0911 220.275 22.8242C220.171 22.5573 220.028 22.3294 219.846 22.1406C219.67 21.9518 219.455 21.8053 219.201 21.7012C218.947 21.5905 218.654 21.5352 218.322 21.5352H212.6C212.261 21.5352 212.004 21.623 211.828 21.7988C211.652 21.9746 211.564 22.2285 211.564 22.5605V33H209.025V22.5605C209.025 21.9095 209.143 21.3561 209.377 20.9004C209.618 20.4447 209.914 20.0768 210.266 19.7969C210.624 19.5169 211.011 19.3151 211.428 19.1914C211.844 19.0612 212.229 18.9961 212.58 18.9961H218.322C218.895 18.9961 219.41 19.071 219.865 19.2207C220.321 19.3639 220.721 19.5592 221.066 19.8066C221.418 20.0475 221.714 20.3275 221.955 20.6465C222.202 20.9655 222.404 21.3008 222.561 21.6523C222.723 21.9974 222.84 22.349 222.912 22.707C222.984 23.0586 223.02 23.3906 223.02 23.7031V24.8555Z"/>
            <Path fill={theme.syntax} id="react" d="M30.7006 31.2769L31.6973 31.3574L31.8848 29.0363L30.0726 30.4987L30.7006 31.2769ZM29.2564 40.1533L28.904 41.0892L29.9442 41.4808L30.2242 40.4052L29.2564 40.1533ZM27.332 33.8197L27.9088 34.6365L27.9088 34.6365L27.332 33.8197ZM22.4613 36.9476L21.9597 36.0825L20.4435 36.9615L21.9717 37.8196L22.4613 36.9476ZM29.5703 40.7636L29.9119 39.8237L28.8911 39.4528L28.6055 40.5007L29.5703 40.7636ZM14.5526 40.7187L15.5177 40.4569L15.232 39.4039L14.2079 39.7799L14.5526 40.7187ZM1.69352 40.4795L0.872098 41.0499L0.872098 41.0499L1.69352 40.4795ZM7.70985 26.1401L8.43667 26.827L9.0857 26.1401L8.43667 25.4533L7.70985 26.1401ZM1.69351 11.8007L2.51493 12.3711L2.51493 12.3711L1.69351 11.8007ZM14.4842 11.5366L14.1413 12.476L15.171 12.8519L15.451 11.792L14.4842 11.5366ZM29.639 11.4918L28.6725 11.7483L28.9524 12.8031L29.9788 12.4323L29.639 11.4918ZM42.3064 11.8007L43.1278 11.2304L43.1278 11.2304L42.3064 11.8007ZM36.2901 26.1401L35.5632 25.4533L34.9142 26.1401L35.5632 26.827L36.2901 26.1401ZM42.3064 40.4796L41.485 39.9092L41.485 39.9092L42.3064 40.4796ZM21.9999 37.2124L22.4939 36.3429L21.9999 36.0623L21.506 36.3429L21.9999 37.2124ZM29.1365 40.6031L30.1013 40.8663L30.3409 39.9881L29.489 39.6672L29.1365 40.6031ZM14.9859 40.5567L14.6305 39.622L13.7834 39.9441L14.0209 40.8187L14.9859 40.5567ZM15.9077 43.452L16.845 43.1034L16.845 43.1034L15.9077 43.452ZM28.2274 43.452L29.1647 43.8005L29.1647 43.8005L28.2274 43.452ZM21.5386 36.9476L22.0282 37.8196L23.5564 36.9615L22.0402 36.0825L21.5386 36.9476ZM14.8666 40.1067L13.8985 40.3574L14.1785 41.4382L15.222 41.0414L14.8666 40.1067ZM13.444 31.3934L14.0698 30.6133L12.2559 29.1583L12.4474 31.4757L13.444 31.3934ZM16.6679 33.8197L16.0911 34.6366L16.0911 34.6366L16.6679 33.8197ZM16.928 33.4451L17.5049 32.6282L17.5049 32.6282L16.928 33.4451ZM21.9999 36.6858L21.5026 37.5534L21.9999 37.8385L22.4973 37.5534L21.9999 36.6858ZM13.3955 30.7676L12.3981 30.84L12.4294 31.2707L12.7643 31.5433L13.3955 30.7676ZM13.3746 21.5296L12.7431 20.7542L12.4063 21.0286L12.3769 21.462L13.3746 21.5296ZM16.928 18.8352L16.3512 18.0183L16.3512 18.0183L16.928 18.8352ZM21.9999 15.5944L22.4973 14.7269L21.9999 14.4417L21.5026 14.7269L21.9999 15.5944ZM27.0719 18.8352L27.6487 18.0183L27.0719 18.8352ZM30.7683 21.6465L31.7661 21.5806L31.7376 21.1478L31.4021 20.8729L30.7683 21.6465ZM30.748 30.6504L31.3815 31.4242L31.7151 31.1511L31.7455 30.721L30.748 30.6504ZM27.0719 33.4451L27.6487 34.2619L27.6487 34.2619L27.0719 33.4451ZM31.2479 22.0434L31.8894 21.2763L30.1129 19.7907L30.2496 22.1025L31.2479 22.0434ZM31.2297 30.252L30.2318 30.1884L30.0837 32.5129L31.871 31.0194L31.2297 30.252ZM35.656 26.1401L36.377 26.833L37.0428 26.1401L36.377 25.4473L35.656 26.1401ZM35.9726 25.8074L35.2523 26.5011L35.9804 27.2571L36.7003 26.4933L35.9726 25.8074ZM31.2078 21.417L30.2102 21.4858L30.2397 21.915L30.5718 22.1887L31.2078 21.417ZM29.756 11.9428L29.4164 11.0022L28.5641 11.3098L28.7866 12.1883L29.756 11.9428ZM32.6423 11.0414L32.8937 12.0093L32.8937 12.0093L32.6423 11.0414ZM39.7086 21.2188L40.5355 21.7812L40.5355 21.7812L39.7086 21.2188ZM35.9726 26.4729L36.7003 25.787L35.9804 25.0232L35.2523 25.7792L35.9726 26.4729ZM31.1866 30.8807L30.5509 30.1088L30.2207 30.3807L30.1893 30.8073L31.1866 30.8807ZM29.6901 40.3137L28.7223 40.0619L28.4932 40.943L29.3489 41.2537L29.6901 40.3137ZM32.6423 41.2389L32.3909 42.2068L32.3909 42.2068L32.6423 41.2389ZM41.8601 40.1644L41.0387 39.5941L41.0387 39.5941L41.8601 40.1644ZM39.7086 31.0615L38.8817 31.6238L38.8817 31.6238L39.7086 31.0615ZM30.724 21.0223L30.0956 21.8002L31.8964 23.2548L31.7212 20.9466L30.724 21.0223ZM27.332 18.4606L26.7552 19.2775L26.7552 19.2775L27.332 18.4606ZM22.4613 15.3327L21.9717 14.4607L20.4435 15.3188L21.9597 16.1978L22.4613 15.3327ZM29.322 12.1023L30.2914 11.8568L30.0172 10.7742L28.9713 11.1659L29.322 12.1023ZM21.9999 15.0679L21.506 15.9374L21.9999 16.218L22.4939 15.9374L21.9999 15.0679ZM29.2051 11.6515L29.5558 12.5879L30.4041 12.2702L30.1715 11.3947L29.2051 11.6515ZM28.2274 8.54804L29.1647 8.19951L28.2274 8.54804ZM15.9077 8.54804L16.845 8.89656L16.845 8.89656L15.9077 8.54804ZM14.9178 11.6977L13.951 11.4422L13.7205 12.314L14.564 12.6331L14.9178 11.6977ZM14.3678 11.9877L15.3374 12.2322L15.558 11.3575L14.7105 11.0483L14.3678 11.9877ZM11.3576 11.0414L11.1062 12.0093L11.1062 12.0093L11.3576 11.0414ZM2.13981 12.1159L2.96123 12.6862L2.96123 12.6862L2.13981 12.1159ZM4.29129 21.2188L3.46439 21.7812L3.46439 21.7812L4.29129 21.2188ZM8.02727 25.8074L7.2996 26.4933L8.01953 27.2571L8.74758 26.5011L8.02727 25.8074ZM12.9355 21.2992L13.5693 22.0727L13.9026 21.7996L13.933 21.3697L12.9355 21.2992ZM8.02727 26.4729L8.74758 25.7792L8.01953 25.0232L7.2996 25.787L8.02727 26.4729ZM4.2913 31.0615L3.4644 30.4991L3.4644 30.4991L4.2913 31.0615ZM2.13981 40.1644L1.31839 40.7347L1.31839 40.7347L2.13981 40.1644ZM11.3576 41.2389L11.6091 42.2068L11.6091 42.2068L11.3576 41.2389ZM14.4333 40.2686L14.7777 41.2074L15.6285 40.8953L15.4013 40.018L14.4333 40.2686ZM12.9573 30.999L13.9545 30.9237L13.9223 30.4965L13.5907 30.2252L12.9573 30.999ZM8.34395 26.1401L7.62288 25.4473L6.95713 26.1401L7.62288 26.833L8.34395 26.1401ZM12.9131 30.3711L12.2741 31.1403L14.0631 32.6261L13.9109 30.3056L12.9131 30.3711ZM12.8943 21.9248L13.8925 21.9856L14.0332 19.6778L12.2551 21.1558L12.8943 21.9248ZM21.5386 15.3327L22.0402 16.1978L23.5564 15.3188L22.0282 14.4607L21.5386 15.3327ZM14.8013 12.1488L15.1551 11.2135L14.1059 10.8166L13.8317 11.9044L14.8013 12.1488ZM16.6679 18.4606L16.0911 17.6437L16.0911 17.6437L16.6679 18.4606ZM13.42 20.9062L12.423 20.8287L12.2437 23.1332L14.0461 21.6859L13.42 20.9062ZM29.7038 31.1964C29.4455 34.3958 28.9546 37.3425 28.2886 39.9014L30.2242 40.4052C30.9229 37.7202 31.4308 34.6576 31.6973 31.3574L29.7038 31.1964ZM27.9088 34.6365C29.1004 33.7951 30.2423 32.9317 31.3286 32.0551L30.0726 30.4987C29.0199 31.3482 27.9121 32.1858 26.7552 33.0028L27.9088 34.6365ZM22.9628 37.8127C24.6003 36.8635 26.2579 35.8023 27.9088 34.6365L26.7552 33.0028C25.1521 34.1348 23.5447 35.1636 21.9597 36.0825L22.9628 37.8127ZM21.9717 37.8196C24.3643 39.1631 26.7043 40.261 28.904 41.0892L29.6088 39.2174C27.5141 38.4288 25.2657 37.3755 22.9509 36.0757L21.9717 37.8196ZM28.6055 40.5007C27.7773 43.5396 26.712 45.9748 25.5273 47.6264C24.3282 49.298 23.137 50 22.0676 50V52C24.0787 52 25.7932 50.687 27.1524 48.7921C28.5261 46.8771 29.6719 44.1941 30.5351 41.0265L28.6055 40.5007ZM22.0676 50C20.9955 50 19.8011 49.2945 18.5993 47.6145C17.4121 45.9549 16.3455 43.5085 15.5177 40.4569L13.5874 40.9805C14.4502 44.1608 15.597 46.855 16.9727 48.7781C18.3337 50.6808 20.0515 52 22.0676 52V50ZM14.2079 39.7799C11.2099 40.8807 8.5685 41.4264 6.50667 41.4093C4.42085 41.392 3.14002 40.8095 2.51494 39.9092L0.872098 41.0499C2.03755 42.7284 4.12477 43.3896 6.49009 43.4092C8.87942 43.429 11.7722 42.8048 14.8972 41.6574L14.2079 39.7799ZM2.51494 39.9092C1.8005 38.8802 1.77094 37.1775 2.80221 34.7814C3.81308 32.4328 5.74318 29.6773 8.43667 26.827L6.98302 25.4533C4.19601 28.4027 2.10086 31.352 0.965145 33.9907C-0.150164 36.582 -0.447634 39.1491 0.872098 41.0499L2.51494 39.9092ZM0.872091 11.2304C-0.447641 13.1312 -0.150171 15.6983 0.965139 18.2896C2.10085 20.9283 4.19601 23.8776 6.98302 26.827L8.43667 25.4533C5.74318 22.603 3.81308 19.8475 2.80221 17.4989C1.77093 15.1028 1.80049 13.4 2.51493 12.3711L0.872091 11.2304ZM14.8272 10.5972C11.7179 9.46211 8.84033 8.84677 6.46322 8.87132C4.10948 8.89562 2.03322 9.55807 0.872091 11.2304L2.51493 12.3711C3.13767 11.4741 4.41107 10.8926 6.48387 10.8712C8.5333 10.85 11.1592 11.3873 14.1413 12.476L14.8272 10.5972ZM15.451 11.792C16.2763 8.66822 17.3505 6.15795 18.5514 4.453C19.7681 2.72563 20.9808 2 22.0676 2V0C20.0243 0 18.2876 1.35445 16.9163 3.30127C15.5292 5.27051 14.3767 8.02854 13.5174 11.2812L15.451 11.792ZM22.0676 2C23.1517 2 24.3612 2.72209 25.5753 4.44113C26.7739 6.13811 27.8467 8.63717 28.6725 11.7483L30.6056 11.2353C29.7456 7.9953 28.5941 5.24847 27.209 3.28733C25.8395 1.34825 24.106 0 22.0676 0V2ZM29.9788 12.4323C32.9323 11.3653 35.5301 10.8432 37.5571 10.8717C39.6065 10.9005 40.8665 11.4802 41.485 12.371L43.1278 11.2304C41.9745 9.56933 39.918 8.90463 37.5852 8.87189C35.2301 8.83884 32.3801 9.43827 29.2993 10.5513L29.9788 12.4323ZM41.485 12.371C42.1994 13.4 42.229 15.1028 41.1977 17.4989C40.1868 19.8475 38.2567 22.6029 35.5632 25.4533L37.0169 26.827C39.8039 23.8776 41.8991 20.9282 43.0348 18.2895C44.1501 15.6983 44.4476 13.1312 43.1278 11.2304L41.485 12.371ZM43.1278 41.0499C44.4476 39.1491 44.1501 36.582 43.0348 33.9907C41.8991 31.352 39.8039 28.4027 37.0169 25.4533L35.5632 26.827C38.2567 29.6773 40.1868 32.4328 41.1977 34.7814C42.229 37.1775 42.1994 38.8802 41.485 39.9092L43.1278 41.0499ZM29.2288 41.7035C32.3255 42.8288 35.1908 43.4371 37.5582 43.4087C39.9027 43.3807 41.9702 42.7172 43.1278 41.0499L41.485 39.9092C40.8641 40.8034 39.5967 41.3842 37.5343 41.4089C35.4947 41.4333 32.8813 40.9028 29.9119 39.8237L29.2288 41.7035ZM21.506 38.0819C24.0135 39.5063 26.472 40.6681 28.7841 41.5389L29.489 39.6672C27.2856 38.8374 24.9216 37.7219 22.4939 36.3429L21.506 38.0819ZM15.3414 41.4914C17.6167 40.626 20.0317 39.4806 22.4939 38.0819L21.506 36.3429C19.1223 37.697 16.7998 38.797 14.6305 39.622L15.3414 41.4914ZM16.845 43.1034C16.5229 42.2374 16.2236 41.2985 15.951 40.2946L14.0209 40.8187C14.3077 41.8749 14.6251 42.872 14.9704 43.8005L16.845 43.1034ZM22.0676 49.4506C21.3219 49.4506 20.4503 49.0417 19.5099 47.9739C18.5727 46.9096 17.6552 45.2823 16.845 43.1034L14.9704 43.8005C15.8295 46.111 16.8531 47.9831 18.009 49.2957C19.1618 50.6048 20.5354 51.4506 22.0676 51.4506V49.4506ZM27.2901 43.1034C26.4799 45.2823 25.5624 46.9096 24.6252 47.9739C23.6849 49.0417 22.8132 49.4506 22.0676 49.4506V51.4506C23.5997 51.4506 24.9733 50.6048 26.1261 49.2957C27.282 47.9831 28.3056 46.111 29.1647 43.8005L27.2901 43.1034ZM28.1718 40.3398C27.9025 41.3267 27.6073 42.2504 27.2901 43.1034L29.1647 43.8005C29.5048 42.886 29.8179 41.9049 30.1013 40.8663L28.1718 40.3398ZM21.049 36.0757C18.7784 37.3507 16.5716 38.3885 14.5112 39.172L15.222 41.0414C17.3849 40.219 19.6812 39.1375 22.0282 37.8196L21.049 36.0757ZM15.8347 39.856C15.1826 37.3383 14.6998 34.4473 14.4406 31.311L12.4474 31.4757C12.7148 34.7112 13.2145 37.7161 13.8985 40.3574L15.8347 39.856ZM12.8183 32.1734C13.8604 33.0094 14.9531 33.833 16.0911 34.6366L17.2448 33.0028C16.1399 32.2226 15.0798 31.4236 14.0698 30.6133L12.8183 32.1734ZM16.0911 34.6366C17.742 35.8024 19.3996 36.8635 21.0371 37.8127L22.0402 36.0825C20.4552 35.1636 18.8478 34.1348 17.2448 33.0028L16.0911 34.6366ZM16.3512 34.2619C18.0733 35.478 19.8008 36.5777 21.5026 37.5534L22.4973 35.8183C20.8511 34.8745 19.1766 33.8087 17.5049 32.6282L16.3512 34.2619ZM12.7643 31.5433C13.8987 32.4663 15.0966 33.376 16.3512 34.2619L17.5049 32.6282C16.2871 31.7683 15.1255 30.8861 14.0266 29.992L12.7643 31.5433ZM14.3929 30.6953C14.2828 29.1783 14.2249 27.6085 14.2249 26H12.2249C12.2249 27.6563 12.2845 29.2744 12.3981 30.84L14.3929 30.6953ZM14.2249 26C14.2249 24.4947 14.2756 23.0233 14.3723 21.5973L12.3769 21.462C12.2771 22.9334 12.2249 24.45 12.2249 26H14.2249ZM14.0061 22.305C15.111 21.4052 16.2795 20.5173 17.5049 19.6521L16.3512 18.0183C15.0888 18.9098 13.8838 19.8253 12.7431 20.7542L14.0061 22.305ZM17.5049 19.6521C19.1766 18.4716 20.8511 17.4058 22.4973 16.462L21.5026 14.7269C19.8008 15.7026 18.0733 16.8023 16.3512 18.0183L17.5049 19.6521ZM27.6487 18.0183C25.9266 16.8023 24.1991 15.7026 22.4973 14.7269L21.5026 16.462C23.1488 17.4058 24.8233 18.4716 26.4951 19.6521L27.6487 18.0183ZM31.4021 20.8729C30.2186 19.9033 28.9648 18.9477 27.6487 18.0183L26.4951 19.6521C27.7725 20.5542 28.9883 21.4808 30.1345 22.42L31.4021 20.8729ZM29.7705 21.7123C29.8622 23.1023 29.9102 24.5352 29.9102 26H31.9102C31.9102 24.4916 31.8608 23.0149 31.7661 21.5806L29.7705 21.7123ZM29.9102 26C29.9102 27.5677 29.8552 29.0988 29.7505 30.5799L31.7455 30.721C31.8536 29.1924 31.9102 27.6143 31.9102 26H29.9102ZM30.1146 29.8767C28.9742 30.8102 27.7651 31.7313 26.4951 32.6282L27.6487 34.2619C28.9572 33.338 30.204 32.3881 31.3815 31.4242L30.1146 29.8767ZM26.4951 32.6282C24.8233 33.8087 23.1488 34.8745 21.5026 35.8183L22.4973 37.5534C24.1991 36.5777 25.9266 35.478 27.6487 34.2619L26.4951 32.6282ZM32.3637 26C32.3637 24.6341 32.3235 23.2929 32.2461 21.9844L30.2496 22.1025C30.3247 23.3714 30.3637 24.6732 30.3637 26H32.3637ZM32.2277 30.3156C32.3171 28.9123 32.3637 27.4705 32.3637 26H30.3637C30.3637 27.4284 30.3184 28.8279 30.2318 30.1884L32.2277 30.3156ZM34.9349 25.4473C33.6441 26.7907 32.188 28.148 30.5885 29.4847L31.871 31.0194C33.5228 29.639 35.0326 28.2322 36.377 26.833L34.9349 25.4473ZM36.377 25.4473C35.0376 24.0533 33.5341 22.6518 31.8894 21.2763L30.6064 22.8105C32.1989 24.1424 33.6489 25.4946 34.9349 26.833L36.377 25.4473ZM36.6929 25.1138C35.2512 23.6166 33.6254 22.1139 31.8438 20.6454L30.5718 22.1887C32.2981 23.6116 33.8671 25.0626 35.2523 26.5011L36.6929 25.1138ZM32.2054 21.3483C31.9634 17.8352 31.4517 14.5646 30.7254 11.6972L28.7866 12.1883C29.48 14.9259 29.9753 18.0769 30.2102 21.4858L32.2054 21.3483ZM30.0955 12.8834C31.0688 12.532 32.0045 12.2402 32.8937 12.0093L32.3909 10.0735C31.4362 10.3215 30.4415 10.6321 29.4164 11.0022L30.0955 12.8834ZM32.8937 12.0093C35.1267 11.4292 36.9722 11.2543 38.3718 11.4178C39.7741 11.5816 40.6078 12.0657 41.0387 12.6862L42.6815 11.5455C41.8059 10.2844 40.3328 9.63327 38.6038 9.43128C36.8721 9.22896 34.762 9.45758 32.3909 10.0735L32.8937 12.0093ZM41.0387 12.6862C41.4709 13.3088 41.6377 14.27 41.3094 15.6604C40.9822 17.0464 40.1864 18.738 38.8817 20.6565L40.5355 21.7812C41.9199 19.7456 42.8531 17.8265 43.2559 16.1199C43.6578 14.4178 43.5557 12.8046 42.6815 11.5455L41.0387 12.6862ZM38.8817 20.6565C37.9113 22.0834 36.6895 23.589 35.245 25.1215L36.7003 26.4933C38.205 24.8971 39.4962 23.3094 40.5355 21.7812L38.8817 20.6565ZM35.2523 25.7792C33.8616 27.2235 32.2855 28.6803 30.5509 30.1088L31.8223 31.6527C33.6123 30.1785 35.2454 28.6697 36.6929 27.1665L35.2523 25.7792ZM30.1893 30.8073C29.939 34.2081 29.4291 37.345 28.7223 40.0619L30.6579 40.5654C31.3988 37.7171 31.9259 34.4594 32.1839 30.9541L30.1893 30.8073ZM29.3489 41.2537C30.3979 41.6345 31.4152 41.9533 32.3909 42.2068L32.8937 40.271C31.985 40.035 31.0277 39.7354 30.0314 39.3737L29.3489 41.2537ZM32.3909 42.2068C34.762 42.8227 36.8721 43.0513 38.6038 42.849C40.3328 42.647 41.8059 41.9958 42.6815 40.7347L41.0387 39.5941C40.6078 40.2146 39.774 40.6987 38.3718 40.8625C36.9722 41.026 35.1266 40.851 32.8937 40.271L32.3909 42.2068ZM42.6815 40.7347C43.5557 39.4756 43.6578 37.8625 43.2559 36.1603C42.853 34.4538 41.9199 32.5347 40.5355 30.4991L38.8817 31.6238C40.1864 33.5423 40.9822 35.2339 41.3094 36.6199C41.6377 38.0103 41.4709 38.9715 41.0387 39.5941L42.6815 40.7347ZM40.5355 30.4991C39.4962 28.9708 38.205 27.3832 36.7003 25.787L35.245 27.1588C36.6895 28.6913 37.9113 30.1969 38.8817 31.6238L40.5355 30.4991ZM31.3524 20.2444C30.259 19.3612 29.1091 18.4913 27.9088 17.6437L26.7552 19.2775C27.9206 20.1004 29.0361 20.9443 30.0956 21.8002L31.3524 20.2444ZM27.9088 17.6437C26.2579 16.4779 24.6003 15.4168 22.9628 14.4675L21.9597 16.1978C23.5447 17.1167 25.1521 18.1455 26.7552 19.2775L27.9088 17.6437ZM22.9509 16.2046C25.2894 14.8915 27.56 13.83 29.6727 13.0388L28.9713 11.1659C26.752 11.997 24.3886 13.1035 21.9717 14.4607L22.9509 16.2046ZM28.3527 12.3479C29.0062 14.9277 29.4833 17.8892 29.7269 21.098L31.7212 20.9466C31.4699 17.6373 30.9765 14.561 30.2914 11.8568L28.3527 12.3479ZM22.4939 15.9374C24.9462 14.5444 27.3335 13.4203 29.5558 12.5879L28.8543 10.715C26.5218 11.5887 24.0389 12.7596 21.506 14.1984L22.4939 15.9374ZM30.1715 11.3947C29.8699 10.2591 29.5331 9.1902 29.1647 8.19951L27.2901 8.89656C27.6338 9.82072 27.9516 10.8278 28.2386 11.9082L30.1715 11.3947ZM29.1647 8.19951C28.3056 5.88897 27.282 4.01694 26.1261 2.70433C24.9733 1.39517 23.5997 0.549451 22.0676 0.549451V2.54945C22.8132 2.54945 23.6849 2.95832 24.6252 4.0261C25.5624 5.09042 26.4799 6.71768 27.2901 8.89656L29.1647 8.19951ZM22.0676 0.549451C20.5354 0.549451 19.1618 1.39517 18.009 2.70433C16.8531 4.01694 15.8295 5.88897 14.9704 8.19951L16.845 8.89656C17.6552 6.71768 18.5727 5.09042 19.5099 4.0261C20.4503 2.95832 21.3219 2.54945 22.0676 2.54945V0.549451ZM14.9704 8.19951C14.5969 9.20397 14.2559 10.2889 13.951 11.4422L15.8846 11.9533C16.1747 10.8559 16.4965 9.83359 16.845 8.89656L14.9704 8.19951ZM22.4939 14.1984C20.0065 12.7854 17.5673 11.6308 15.2716 10.7624L14.564 12.6331C16.7523 13.4608 19.0979 14.5694 21.506 15.9374L22.4939 14.1984ZM14.7105 11.0483C13.6405 10.6579 12.6031 10.3317 11.609 10.0735L11.1062 12.0093C12.0321 12.2498 13.0084 12.5562 14.025 12.9271L14.7105 11.0483ZM11.609 10.0735C9.23792 9.45759 7.12784 9.22897 5.39608 9.43129C3.66708 9.63329 2.194 10.2844 1.31839 11.5456L2.96123 12.6862C3.39208 12.0657 4.22587 11.5816 5.62816 11.4178C7.02768 11.2543 8.87327 11.4292 11.1062 12.0093L11.609 10.0735ZM1.31839 11.5456C0.444175 12.8047 0.342139 14.4178 0.743985 16.12C1.14687 17.8265 2.08004 19.7456 3.46439 21.7812L5.11819 20.6565C3.81349 18.738 3.01769 17.0464 2.69048 15.6604C2.36223 14.27 2.52898 13.3088 2.96123 12.6862L1.31839 11.5456ZM3.46439 21.7812C4.50373 23.3095 5.79494 24.8971 7.2996 26.4933L8.75495 25.1215C7.31042 23.589 6.08862 22.0834 5.11819 20.6565L3.46439 21.7812ZM8.74758 26.5011C10.1705 25.0235 11.7873 23.5327 13.5693 22.0727L12.3018 20.5256C10.463 22.0321 8.78787 23.5759 7.30696 25.1138L8.74758 26.5011ZM13.933 21.3697C14.1698 18.0235 14.6577 14.9284 15.3374 12.2322L13.3981 11.7432C12.6862 14.567 12.182 17.7797 11.938 21.2286L13.933 21.3697ZM7.2996 25.787C5.79494 27.3832 4.50373 28.9708 3.4644 30.4991L5.1182 31.6238C6.08862 30.1969 7.31042 28.6913 8.75495 27.1588L7.2996 25.787ZM3.4644 30.4991C2.08005 32.5347 1.14687 34.4538 0.743992 36.1603C0.342146 37.8625 0.444182 39.4756 1.31839 40.7347L2.96123 39.5941C2.52898 38.9715 2.36224 38.0102 2.69048 36.6198C3.0177 35.2338 3.8135 33.5423 5.1182 31.6238L3.4644 30.4991ZM1.31839 40.7347C2.19401 41.9958 3.66709 42.647 5.39609 42.849C7.12784 43.0513 9.23793 42.8227 11.6091 42.2068L11.1062 40.271C8.87328 40.851 7.02769 41.026 5.62816 40.8625C4.22588 40.6987 3.39208 40.2146 2.96123 39.5941L1.31839 40.7347ZM11.6091 42.2068C12.6239 41.9431 13.6839 41.6088 14.7777 41.2074L14.0888 39.3298C13.0493 39.7112 12.0515 40.0255 11.1062 40.271L11.6091 42.2068ZM15.4013 40.018C14.7086 37.3423 14.2064 34.2614 13.9545 30.9237L11.9602 31.0742C12.2198 34.5149 12.739 37.7145 13.4652 40.5193L15.4013 40.018ZM7.30696 27.1665C8.79381 28.7105 10.4765 30.2605 12.3239 31.7728L13.5907 30.2252C11.8002 28.7595 10.1762 27.2627 8.74758 25.7792L7.30696 27.1665ZM7.62288 26.833C9.00659 28.273 10.5655 29.7212 12.2741 31.1403L13.552 29.6018C11.8971 28.2274 10.3936 26.8299 9.06502 25.4473L7.62288 26.833ZM12.2551 21.1558C10.5539 22.5698 9.00146 24.0126 7.62288 25.4473L9.06502 26.833C10.3887 25.4555 11.886 24.0633 13.5336 22.6938L12.2551 21.1558ZM13.7715 26C13.7715 24.6324 13.8129 23.2914 13.8925 21.9856L11.8962 21.8639C11.8141 23.2105 11.7715 24.5921 11.7715 26H13.7715ZM13.9109 30.3056C13.8193 28.9083 13.7715 27.4695 13.7715 26H11.7715C11.7715 27.5127 11.8207 28.9952 11.9152 30.4365L13.9109 30.3056ZM22.0282 14.4607C19.6571 13.1292 17.3376 12.039 15.1551 11.2135L14.4475 13.0841C16.5261 13.8704 18.7549 14.9164 21.049 16.2046L22.0282 14.4607ZM17.2448 19.2774C18.8478 18.1455 20.4552 17.1167 22.0402 16.1978L21.0371 14.4675C19.3996 15.4168 17.742 16.4779 16.0911 17.6437L17.2448 19.2774ZM14.0461 21.6859C15.0633 20.8692 16.1313 20.0638 17.2448 19.2774L16.0911 17.6437C14.9442 18.4536 13.8434 19.2838 12.7939 20.1265L14.0461 21.6859ZM13.8317 11.9044C13.1609 14.5649 12.6755 17.5836 12.423 20.8287L14.417 20.9838C14.6617 17.8376 15.1311 14.9316 15.771 12.3933L13.8317 11.9044Z" mask="url(#path-2-outside-1)"/>
            <Path fill={theme.syntax} d="M25.0068 30H20.4268C20.3096 30 20.1826 29.987 20.0459 29.9609C19.9124 29.9316 19.779 29.8877 19.6455 29.8291C19.5153 29.7705 19.39 29.6956 19.2695 29.6045C19.1491 29.5101 19.0417 29.3978 18.9473 29.2676C18.8561 29.1341 18.7829 28.9811 18.7275 28.8086C18.6722 28.6328 18.6445 28.4359 18.6445 28.2178V24.7803C18.6445 24.6631 18.6576 24.5378 18.6836 24.4043C18.7129 24.2676 18.7568 24.1341 18.8154 24.0039C18.874 23.8704 18.9505 23.7435 19.0449 23.623C19.1393 23.5026 19.2516 23.3968 19.3818 23.3057C19.5153 23.2113 19.6683 23.1364 19.8408 23.0811C20.0133 23.0257 20.2087 22.998 20.4268 22.998H25.0068V24.2676H20.4268C20.2607 24.2676 20.1338 24.3115 20.0459 24.3994C19.958 24.4873 19.9141 24.6175 19.9141 24.79V28.2178C19.9141 28.3805 19.958 28.5075 20.0459 28.5986C20.137 28.6865 20.264 28.7305 20.4268 28.7305H25.0068V30Z"/>
        </Svg>


    );
}

export default Logo;