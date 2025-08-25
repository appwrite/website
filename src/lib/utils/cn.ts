import { clsx, type ClassValue } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

const twMerge = extendTailwindMerge({
    extend: {
        theme: {
            text: [
                'x-micro',
                'micro',
                'caption',
                'sub-body',
                'body',
                'paragraph-md',
                'paragraph-lg',
                'description',
                'label',
                'title',
                'display',
                'headline'
            ],
            color: ['primary', 'secondary']
        }
    }
});

export const cn = (...inputs: ClassValue[]) => {
    return twMerge(clsx(inputs));
};
