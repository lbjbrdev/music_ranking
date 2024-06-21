import { Theme, ToastPosition, TypeOptions, toast as toastify } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

interface IProps {
    message: string;
    type?: TypeOptions;
    position?: ToastPosition;
    autoClose?: number;
    hideProgressBar?: boolean;
    theme?: Theme;
}

export function toast(props: IProps) {
    return toastify(props.message, {
        type: props.type || 'default',
        position: props?.position || "top-right",
        autoClose: props?.autoClose || 5000,
        hideProgressBar: props?.hideProgressBar,
        theme: props?.theme || "light",
    });
}