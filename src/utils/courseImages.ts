export function getCourseImage(slug: string): string {
  const baseUrl = import.meta.env.BASE_URL;
  
  switch (slug) {
    case 'financial-market-basic-course':
      return `${baseUrl}images/course-financial-market-basic.jpg`;
    case 'market-basic-course':
      return `${baseUrl}images/course-basic-finance-youngs.jpg`;
    case 'pro-trader-course-from-confusion-to-clarity':
      return `${baseUrl}images/course-confusion-to-clarity.jpg`;
    case 'pro-trader-course-option-specific':
      return `${baseUrl}images/course-option-specific.jpg`;
    case 'comprehensive-course':
      return `${baseUrl}images/course-comprehensive.jpg`;
    case 'mentorship':
      return `${baseUrl}images/course-mentorship-one-to-one.jpg`;
    case 'nism-certification-program':
      return `${baseUrl}images/course-nism-certification.jpg`;
    case 'advisory-services':
      return `${baseUrl}images/course-advisory-services.jpg`;
    default:
      return `${baseUrl}images/course-comprehensive.jpg`;
  }
}
