import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface BouquetChoiceProps {
  onClose: () => void;
  onSelect: (type: "big" | "small") => void;
}

const BouquetChoice: React.FC<BouquetChoiceProps> = ({
  onClose,
  onSelect,
}) => {
  const handleBigBouquet = () => {
    console.log("Big Bouquet selected");
    onSelect("big");
  };

  const handleSmallBouquet = () => {
    console.log("Small Bouquet selected");
    onSelect("small");
  };

  return (
    <AnimatePresence>
      <motion.div
        className="bouquet-choice-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 99999,
        }}
      >
        {/* BACKGROUND */}
        <motion.div
          className="bouquet-choice-backdrop"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />

        {/* MODAL */}
        <motion.div
          className="bouquet-choice-modal"
          initial={{
            opacity: 0,
            scale: 0.85,
            y: 40,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.85,
            y: 40,
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          style={{
            position: "relative",
            zIndex: 100000,
          }}
        >
          {/* CLOSE BUTTON */}
          <button
            type="button"
            className="bouquet-choice-close"
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>

          {/* LABEL */}
          <motion.p
            className="bouquet-choice-label"
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
            }}
          >
            FIND YOUR PERFECT BOUQUET
          </motion.p>

          {/* TITLE */}
          <motion.h2
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.3,
            }}
          >
            What are you
            <br />
            <em>looking for?</em>
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.p
            className="bouquet-choice-description"
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.4,
            }}
          >
            Choose the size of bouquet you'd like to explore.
          </motion.p>

          {/* OPTIONS */}
          <div className="bouquet-choice-options">

            {/* BIG BOUQUET */}
            <motion.button
              type="button"
              className="bouquet-choice-card"
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.97,
              }}
              onClick={handleBigBouquet}
            >
              <div className="bouquet-choice-image">
                <img
                  src="/images/bouquet-1.jpg"
                  alt="Big bouquet"
                />
              </div>

              <div className="bouquet-choice-card-content">
                <span className="bouquet-choice-number">
                  01
                </span>

                <div>
                  <h3>Big Bouquet</h3>

                  <p>
                    Grand arrangements for special moments
                  </p>
                </div>

                <span className="bouquet-choice-arrow">
                  →
                </span>
              </div>
            </motion.button>

            {/* SMALL BOUQUET */}
            <motion.button
              type="button"
              className="bouquet-choice-card"
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.97,
              }}
              onClick={handleSmallBouquet}
            >
              <div className="bouquet-choice-image">
                <img
                  src="/images/bouquet-13.jpg"
                  alt="Small bouquet"
                />
              </div>

              <div className="bouquet-choice-card-content">
                <span className="bouquet-choice-number">
                  02
                </span>

                <div>
                  <h3>Small Bouquet</h3>

                  <p>
                    Beautiful little gestures of love
                  </p>
                </div>

                <span className="bouquet-choice-arrow">
                  →
                </span>
              </div>
            </motion.button>

          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BouquetChoice;