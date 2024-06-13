# Bake-off 2: Target Selection in Dense Interfaces

## Overview

This project is part of a competition aimed at reducing target selection time in a dense interface scenario. The provided code in p5.js displays an 8x10 grid of targets to users, each associated with a random label. The challenge is to optimize the user interface to minimize target selection time while adhering to specific rules and constraints.

## Challenge

The primary goal is to decrease the selection time for targets in a dense interface consisting of 80 targets. Participants must modify the given p5.js source code to achieve the following:

  - Display an 8x10 grid of targets.
  - Randomly associate labels with each target.
  - Indicate which target label needs to be selected.
  - Quantify user performance based on success rate (%), total task time (seconds), average time per target (seconds), and average time per target with penalty (seconds) if the success rate is less than 100%.
  - Store performance metrics in Firebase.

## Requirements and Constraints

  Design: Open-ended iterative design process starting from ideation to prototyping and testing.
  Rules:
    - No knowledge about or access to the target label variable.
    - No modifications to performance metrics calculation or Firebase code.
    - No manipulation of the area displaying the target label.
    - Use of conventional mouse with two buttons only for input.
    - No text input allowed, either physical or virtual.
    - Maintain consistent UI element sizes across different screens.
