import styled from "styled-components";

interface StyledProps {
    name?: string;
    lineHeight?: string;
    radius?: string;
    w?: string;
    h?: string;
    p?: string;
    pl?: string;
    pr?: string;
    pt?: string;
    pb?: string;
    m?: string;
    ml?: string;
    mr?: string;
    mt?: string;
    mb?: string;
    display?: string;
    justify?: string;
    flexdir?: string;
    align?: string; 
    bg?: string;
    src?: string;
    href?: string;
    gap?: string;
    color?: string;
    alt?: string;
    fontSize?: string;
    textAlign?: string;
    fontWeight?: string;
    border?: string;
    borderTop?: string;
    borderRight?: string;
    borderLeft?: string;
    borderBottom?: string;
    type?: string;
    placeholder?: string;
}

export const Container = styled.div<StyledProps>`
display: none;
    @media only screen and (max-width: 500px){
        width: ${props => props.w || "auto"};
        height: ${props => props.h || "auto"};
        background: ${props => props.bg || "transparent"};
        display: ${props => props.display || "block"};
        gap: ${props => props.gap || "0px"};
        justify-content: ${props => props.justify || "none"};
        align-items: ${props => props.align || "none"};
        flex-direction: ${props => props.flexdir || "row"};
        padding: ${props => props.p};
        padding-top: ${props => props.pt};
        padding-right: ${props => props.pr};
        padding-left: ${props => props.pl};
        padding-bottom: ${props => props.pb};
        margin: ${props => props.m};
        margin-top: ${props => props.mt};
        margin-right: ${props => props.mr};
        margin-left: ${props => props.ml};
        margin-bottom: ${props => props.mb};
    }
`;

export const Image = styled.img<StyledProps>`
        @media only screen and (max-width: 500px){
            width: ${props => props.w || "auto"};
            height: ${props => props.h || "auto"};
            background: ${props => props.bg || "transparent"};
            display: ${props => props.display || "block"};
            flex-direction: ${props => props.flexdir || "row"};
            padding: ${props => props.p || "0px"};
            margin: ${props => props.m || "0px"};
            object-fit: contain;
        }
`;

export const Form = styled.form<StyledProps>`
    @media only screen and (max-width: 500px){
        width: ${props => props.w || "auto"};
        height: ${props => props.h || "auto"};
        background: ${props => props.bg || "transparent"};
        display: ${props => props.display || "block"};
        gap: ${props => props.gap};
        flex-direction: ${props => props.flexdir || "row"};
        padding: ${props => props.p};
        padding-top: ${props => props.pt};
        padding-right: ${props => props.pr};
        padding-left: ${props => props.pl};
        padding-bottom: ${props => props.pb};
        margin: ${props => props.m};
        margin-top: ${props => props.mt};
        margin-right: ${props => props.mr};
        margin-left: ${props => props.ml};
        margin-bottom: ${props => props.mb};
        border: ${props => props.border};
    }
`;

export const Text = styled.p<StyledProps>`
    @media only screen and (max-width: 500px){
        color: ${props => props.color || "black"};
        font-size: ${props => props.fontSize || "black"};
        font-weight: ${props => props.fontWeight || "normal"};
        line-height: ${props => props.lineHeight};
    }
`;

export const Label = styled.label<StyledProps>`
    @media only screen and (max-width: 500px){
    width: ${props => props.w || "auto"};
        height: ${props => props.h || "auto"};
        background: ${props => props.bg || "transparent"};
        display: ${props => props.display || "block"};
        gap: ${props => props.gap || "0px"};
        justify-content: ${props => props.justify || "none"};
        align-items: ${props => props.align || "none"};
        flex-direction: ${props => props.flexdir || "row"};
        padding: ${props => props.p};
        padding-top: ${props => props.pt};
        padding-right: ${props => props.pr};
        padding-left: ${props => props.pl};
        padding-bottom: ${props => props.pb};
        margin: ${props => props.m};
        margin-top: ${props => props.mt};
        margin-right: ${props => props.mr};
        margin-left: ${props => props.ml};
        margin-bottom: ${props => props.mb};
        border: ${props => props.border || "0px"};
        color: ${props => props.color || "black"};
        font-size: ${props => props.fontSize || "black"};
        font-weight: ${props => props.fontWeight || "normal"};
        line-height: ${props => props.lineHeight};
    }
`;

export const Input = styled.input<StyledProps>`
         @media only screen and (max-width: 500px){
        width: ${props => props.w || "auto"};
        height: ${props => props.h || "auto"};
        background: ${props => props.bg || "transparent"};
        display: ${props => props.display || "block"};
        gap: ${props => props.gap || "0px"};
        justify-content: ${props => props.justify || "none"};
        align-items: ${props => props.align || "none"};
        flex-direction: ${props => props.flexdir || "row"};
        border-radius: ${props => props.radius || "0px"};
        padding: ${props => props.p};
        padding-top: ${props => props.pt};
        padding-right: ${props => props.pr};
        padding-left: ${props => props.pl};
        padding-bottom: ${props => props.pb};
        margin: ${props => props.m};
        margin-top: ${props => props.mt};
        margin-right: ${props => props.mr};
        margin-left: ${props => props.ml};
        margin-bottom: ${props => props.mb};
        border: ${props => props.border || "0px"};
        color: ${props => props.color || "black"};
        font-size: ${props => props.fontSize || "black"};
        font-weight: ${props => props.fontWeight || "normal"};
        line-height: ${props => props.lineHeight};
         }
`;

export const Button = styled.button<StyledProps>`
    @media only screen and (max-width: 500px){
        width: ${props => props.w || "auto"};
        height: ${props => props.h || "auto"};
        background: ${props => props.bg || "transparent"};
        display: ${props => props.display || "block"};
        gap: ${props => props.gap || "0px"};
        justify-content: ${props => props.justify || "none"};
        align-items: ${props => props.align || "none"};
        flex-direction: ${props => props.flexdir || "row"};
        padding: ${props => props.p};
        padding-top: ${props => props.pt};
        padding-right: ${props => props.pr};
        padding-left: ${props => props.pl};
        padding-bottom: ${props => props.pb};
        margin: ${props => props.m};
        margin-top: ${props => props.mt};
        margin-right: ${props => props.mr};
        margin-left: ${props => props.ml};
        margin-bottom: ${props => props.mb};
        color: ${props => props.color || "black"};
        font-size: ${props => props.fontSize || "black"};
        font-weight: ${props => props.fontWeight || "normal"};
        border-radius: ${props => props.radius || "0px"};
        border: ${props => props.border};
        line-height: ${props => props.lineHeight};
    }
`;

export const Hr = styled.div<StyledProps>`
    @media only screen and (max-width: 500px){
        width: ${props => props.w || "auto"};
        height: ${props => props.h || "auto"};
        background: ${props => props.bg || "transparent"};
        border-radius: ${props => props.radius || "0px"};
        margin: ${props => props.m};
        border: ${props => props.border};
    }
`;

export const Link = styled.a<StyledProps>`
    @media only screen and (max-width: 500px){
        width: ${props => props.w || "auto"};
        height: ${props => props.h || "auto"};
        background: ${props => props.bg || "transparent"};
        display: ${props => props.display || "block"};
        gap: ${props => props.gap || "0px"};
        justify-content: ${props => props.justify || "none"};
        align-items: ${props => props.align || "none"};
        flex-direction: ${props => props.flexdir || "row"};
        border-radius: ${props => props.radius || "0px"};
        padding: ${props => props.p};
        padding-top: ${props => props.pt};
        padding-right: ${props => props.pr};
        padding-left: ${props => props.pl};
        padding-bottom: ${props => props.pb};
        margin: ${props => props.m};
        margin-top: ${props => props.mt};
        margin-right: ${props => props.mr};
        margin-left: ${props => props.ml};
        margin-bottom: ${props => props.mb};
        border: ${props => props.border || "0px"};
        color: ${props => props.color || "black"};
        font-size: ${props => props.fontSize || "black"};
        font-weight: ${props => props.fontWeight || "normal"};
        line-height: ${props => props.lineHeight};
         }
`;