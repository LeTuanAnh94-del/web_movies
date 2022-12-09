export const IconLink = ({ width = '24', height = '24', className }) => (
    <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        xlink="http://www.w3.org/1999/xlink"
        width={width}
        height={height}
        viewBox="0 0 24 24"
    >
        <defs>
            <path id="prefix__a" d="M0 0h24v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd">
            <mask id="prefix__b" fill="#fff">
                <use href="#prefix__a" />
            </mask>
            <path fill="#FFF" d="M7.973 0l-2.83 2.83 9.17 9.17-9.17 9.17L7.973 24l12-12z" mask="url(#prefix__b)" />
        </g>
    </svg>
);
export const IconLeftArrow = ({ className, width = '30px' }) => (
    <svg className={className} viewBox="0 0 492 492" width={width} id="arrow-left">
        <path
            d="M198.608,246.104L382.664,62.04c5.068-5.056,7.856-11.816,7.856-19.024c0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12    C361.476,2.792,354.712,0,347.504,0s-13.964,2.792-19.028,7.864L109.328,227.008c-5.084,5.08-7.868,11.868-7.848,19.084    c-0.02,7.248,2.76,14.028,7.848,19.112l218.944,218.932c5.064,5.072,11.82,7.864,19.032,7.864c7.208,0,13.964-2.792,19.032-7.864    l16.124-16.12c10.492-10.492,10.492-27.572,0-38.06L198.608,246.104z"
            data-original="#000000"
            data-old_color="#000000"
        />
    </svg>
);
export const IconRightArrow = ({ className, width = '30px', height = '30px' }) => (
    <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 492.004 492.004"
        width={width}
        height={height}
    >
        <path
            d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12    c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028    c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265    c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"
            data-original="#000000"
            data-old_color="#000000"
        />
    </svg>
);
export const IconTrailer = ({ width = '24', height = '24', className }) => (
    <svg width={width} height={height} className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M21 2c1.103 0 2 .896 2 2v16c0 1.103-.897 2-2 2H3c-1.103 0-2-.897-2-2V4c0-1.104.897-2 2-2zm.5 1.5h-19v17h19.001l-.001-17zM7 17v2H5v-2h2zm4 0v2H9v-2h2zm4 0v2h-2v-2h2zm4 0v2h-2v-2h2zm-9-8l6 3-6 3V9zM7 5v2H5V5h2zm4 0v2H9V5h2zm4 0v2h-2V5h2zm4 0v2h-2V5h2z"
            fill="#ffffff"
            fillRule="evenodd"
        />
    </svg>
);
export const IconPlay = ({ className }) => (
    <svg className={className} version="1.1" viewBox="0 0 41.999 41.999">
        <path d="M36.068,20.176l-29-20C6.761-0.035,6.363-0.057,6.035,0.114C5.706,0.287,5.5,0.627,5.5,0.999v40 c0,0.372,0.206,0.713,0.535,0.886c0.146,0.076,0.306,0.114,0.465,0.114c0.199,0,0.397-0.06,0.568-0.177l29-20 c0.271-0.187,0.432-0.494,0.432-0.823S36.338,20.363,36.068,20.176z" />
    </svg>
);
export const IconAddList = ({ className }) => (
    <svg viewBox="0 0 448 448" className={className}>
        <path d="m408 184h-136c-4.417969 0-8-3.582031-8-8v-136c0-22.089844-17.910156-40-40-40s-40 17.910156-40 40v136c0 4.417969-3.582031 8-8 8h-136c-22.089844 0-40 17.910156-40 40s17.910156 40 40 40h136c4.417969 0 8 3.582031 8 8v136c0 22.089844 17.910156 40 40 40s40-17.910156 40-40v-136c0-4.417969 3.582031-8 8-8h136c22.089844 0 40-17.910156 40-40s-17.910156-40-40-40zm0 0" />{' '}
    </svg>
);
