# Description of this document

This document outlines specific political goals and intentions for this project. This file is a living document and is expected and encouraged to change over time; changes will be included in the CHANGELOG.

## Social goals of react-useintersection

The `IntersectionObserver` api is a powerful JavaScript construct. The author of this package intends for it to help facilitate:

1. **Accessible UX design:** Programmatically determining the intersection of nodes with the screen gives powerful flexibility to control styling and layout.

2. **Wider understanding of advanced JavaScript apis:** The `IntersectionObserver` api is but one of several Observer apis in JavaScript, most of which are in the author's opinion relatively unknown to the average programmer because there is a lack of high level packages for them in frameworks such as React.

3. **Demonstrable testing practices for React outside of the Jest ecosystem:** Jest is a powerful testing framework; however, in the author's opinion, it is worthwhile to be familiar with more than one tool, as every tool is "more than a hammer." In specific, Jest is ideally suited for large projects, and is arguably overkill for small components such as `react-useintersection`.
