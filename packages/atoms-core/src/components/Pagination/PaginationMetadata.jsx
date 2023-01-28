// interface PagesMetadata {
//   start: number;
//   end: number;
//   rangeSize: number;
//   range: number[];
//   isBackwardNavigationEnabled: boolean;
//   isForwardNavigationEnabled: boolean;
//   shouldShowEnds: boolean;
// }

const getStartPage = (selectedPage) =>
  selectedPage - 2 >= 1 ? selectedPage - 2 : 1;

const getEndPage = (selectedPage, count) =>
  selectedPage + 2 <= count ? selectedPage + 2 : count;

const getRangeSize = (start, end) =>
  end - start + 1;

const getRange =(start, rangeSize) =>
  [...Array(rangeSize).keys()].map(page => page + start + 1);

export default (selectedPage, 
                count, 
                isEndsNavigationEnabled) => {
  const start = getStartPage(selectedPage);
  const end = getEndPage(selectedPage, count);
  const rangeSize = getRangeSize(start, end);
  const range = getRange(start, rangeSize);
  const isForwardNavigationEnabled = start !== 1;
  const isBackwardNavigationEnabled = end !== count;
  const shouldShowEnds = isEndsNavigationEnabled;

  return {
    start,
    end,
    rangeSize,
    range,
    isBackwardNavigationEnabled,
    isForwardNavigationEnabled,
    shouldShowEnds,
  }
};