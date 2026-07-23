export function getCourseImage(slug: string): string {
  const baseUrl = import.meta.env.BASE_URL;
  
  switch (slug) {
    case 'financial-market-basic-course':
      return `${baseUrl}images/course-classroom-training.jpg`;
    case 'market-basic-course':
      return `${baseUrl}images/course-knowledge-transfer.jpg`;
    case 'pro-trader-course-from-confusion-to-clarity':
      return `${baseUrl}images/course-guided-path.jpg`;
    case 'pro-trader-course-option-specific':
      return `${baseUrl}images/course-technical-chart.jpg`;
    case 'comprehensive-course':
      return `${baseUrl}images/course-technical-chart.jpg`;
    case 'mentorship':
      return `${baseUrl}images/course-mentorship-ladder.jpg`;
    case 'nism-certification-program':
      return `${baseUrl}images/course-classroom-training.jpg`;
    case 'advisory-services':
      return `${baseUrl}images/course-guided-path.jpg`;
    default:
      return `${baseUrl}images/course-technical-chart.jpg`;
  }
}
