import React from 'react';

export interface Options extends IntersectionObserverInit {
    freezeOnceVisible?: boolean;
}

const  useIntersectionObserver = (targetRef: React.RefObject<Element | null>,
     {threshold = 0, root=null, rootMargin="0%",freezeOnceVisible=false}:Options)  => {
        const [entry, setEntry] = React.useState<IntersectionObserverEntry>();
        const frozen = entry?.isIntersecting && freezeOnceVisible;
        console.log("entry?.isIntersecting", entry?.isIntersecting);
        
        React.useEffect(() => {
            const element = targetRef.current;
            if(!element || frozen) return;
            const observerParams = {
                threshold, root, rootMargin
            };
            const ob = new IntersectionObserver(([entry]:IntersectionObserverEntry[]) => {
                setEntry(entry);
            }, observerParams)

            ob.observe(element); 

            return () => {
                ob.disconnect();
            }
        },[threshold, root, rootMargin, targetRef, frozen])

        return entry; 
}

export default useIntersectionObserver;