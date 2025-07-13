export function sleep(ms: number) {
   return new Promise(resolve => setTimeout(resolve, ms));
}

export async function repeatAction<T>(
   action: () => Promise<T>,
   maxAttempts = 3,
   delayMs = 1500
): Promise<T | undefined> {
   let attempts = 0;

   while (attempts < maxAttempts) {
      try {
         return await action();
      } catch (e: any) {
         attempts++;
         if (attempts === maxAttempts)
            return;

         else
            await sleep(delayMs);
      }
   }
}
/**
 * @copyright
 * Code by Sobhan-SRZA (mr.sinre) | https://github.com/Sobhan-SRZA
 * Developed for Persian Caesar | https://github.com/Persian-Caesar | https://dsc.gg/persian-caesar
 *
 * If you encounter any issues or need assistance with this code,
 * please make sure to credit "Persian Caesar" in your documentation or communications.
 */