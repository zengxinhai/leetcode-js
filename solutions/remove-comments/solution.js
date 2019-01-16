/**
 * @param {string[]} source
 * @return {string[]}
 */

const removeComments = (source) => {
  // declare a map for the open/close comment relation
  const commentPair = new Map([['//', '\n'], ['/*', '*/']]);
  // Concat the source to a whole string, careful for the last "new line"
  lines = source.join('\n') + '\n';
  // Regex pattern to match the open comment
  const startCommentRegex = /\/[/*]/g;
  // Declare a variable for storing the non-comment characters
  let resultSource = '';

  // Each time we retrieve the char from startIndex to next startComment
  let startIndex = 0;
  let openCommentMatch = startCommentRegex.exec(lines);
  while(openCommentMatch) {
      let openComment = openCommentMatch[0];
      let openMatchIdx = openCommentMatch.index;
      resultSource += lines.slice(startIndex, openMatchIdx);
      
      const endComment = commentPair.get(openComment);
      const endCommentIndex = lines.indexOf(endComment, startCommentRegex.lastIndex);
      if (endCommentIndex > -1) {
          if (endComment === '\n') {
              // Keep the new line character
              startIndex = endCommentIndex;
          } else {
              // Discard the close comment chars "*/""
              startIndex = endCommentIndex + endComment.length;
          }
          // Be sure to match from the new startIndex
          startCommentRegex.lastIndex = startIndex;
          openCommentMatch = startCommentRegex.exec(lines);
      } else {
          break;
      }
  }
  resultSource += lines.slice(startIndex);
  // Recover the array, and remove empty line
  return resultSource.split('\n').filter(line => line);
};