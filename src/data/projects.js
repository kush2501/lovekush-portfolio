import emotionDetectionImage from "../assets/projects/emotion-detection/10_Live_Production_Application.png";

import livePositiveImage from "../assets/projects/emotion-detection/11_Live_Positive_Prediction.png";

import liveNegativeImage from "../assets/projects/emotion-detection/12_Live_Negative_Prediction.png";

import dockerProductionImage from "../assets/projects/emotion-detection/09_EC2_Docker_Production_Healthy.png";

import awsSsmImage from "../assets/projects/emotion-detection/08_AWS_SSM_Managed_EC2.png";

import awsTrustPolicyImage from "../assets/projects/emotion-detection/07_AWS_IAM_OIDC_Trust_Policy.png";

import awsRoleImage from "../assets/projects/emotion-detection/06_AWS_IAM_OIDC_Role.png";

import githubCdImage from "../assets/projects/emotion-detection/05_GitHub_CD_Success.png";

import githubCiDockerImage from "../assets/projects/emotion-detection/04_GitHub_CI_MLOps_Docker.png";

import githubCiImage from "../assets/projects/emotion-detection/03_GitHub_CI_Overview.png";

import githubCdOverviewImage from "../assets/projects/emotion-detection/02_GitHub_CD_Success.png";
const projects = [
  {
    id: 1,
    title: "Emotion Detection MLOps Pipeline",

    description:
      "Developed an end-to-end Machine Learning pipeline for emotion classification using modular architecture, experiment tracking, data versioning, CI/CD automation, and REST API deployment.",

    technologies: [
      "Python",
      "Scikit-learn",
      "MLflow",
      "DVC",
      "Flask",
      "GitHub Actions",
      "AWS",
    ],

    github: "https://github.com/kush2501/emotion-detection-using-mlflow-dvc",

    liveDemo: "https://emotion-mlops.duckdns.org",

    featured: true,

    image: emotionDetectionImage,

    screenshots: [
      livePositiveImage,
      liveNegativeImage,
      dockerProductionImage,
      awsSsmImage,
      awsTrustPolicyImage,
      awsRoleImage,
      githubCdImage,
      githubCiDockerImage,
      githubCiImage,
      githubCdOverviewImage,
    ],
  },
];

export default projects;