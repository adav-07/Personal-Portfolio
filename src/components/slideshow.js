export const Slideshow = ({ image }) => (
    <AnimatePresence>
      <motion.img
        key={"../helpers/slide.jpg"}
        src={"../helpers/slide.jpg"}
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
      />
    </AnimatePresence>
  )