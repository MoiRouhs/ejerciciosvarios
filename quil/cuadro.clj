(ns my.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(defn setup []
  (q/frame-rate 30))

(def tam 400)
(def spc 10)

(defn draw []
  (q/background 255)
  (doseq [x (range 0 (/ tam spc))]
    (q/push-style)
    ;;(q/no-fill)
    (q/stroke-weight (/ spc 2))
    ;;(q/rect-mode :center)
    (q/with-translation [(/ (q/width) 2) (/ (q/height) 2)]
    ;;(q/with-rotation [(q/radians (q/sin (* (q/frame-count) (* 5e-3 x))))]
    (q/with-rotation [(q/radians (* (q/cos (* (q/frame-count) (* 1e-4 x))) 5))]  
	(q/rect (+ (/ tam -2) (* (/ spc 2) x)) (+ (/ tam -2) (* (/ spc 2) x)) (- tam (* spc x)) (- tam (* spc x)))))
    (q/pop-style)))

(q/defsketch my
  :host "host"
  :size [500 500]
  :setup setup
  :draw draw
  :middleware [m/fun-mode])
