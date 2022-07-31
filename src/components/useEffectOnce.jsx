import { useEffect, useRef } from 'react';


export const useEffectOnce = (effect) => {

   const destroyFunction = useRef();
   const isCalledOnce = useRef(false);
   const isRendered = useRef(false);

   if (isCalledOnce.current) {
      isRendered.current = true;
   }

   useEffect(() => {
      if (isCalledOnce.current) {
         return;
      }

      isCalledOnce.current = true;
      destroyFunction.current = effect();

      return () => {
         if (!isRendered.current) {
            return;
         }

         if (destroyFunction.current) {
            destroyFunction.current();
         }
      };
   }, []);
};