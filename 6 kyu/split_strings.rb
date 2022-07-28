def solution(str)
  str = str + "_" if str.length.odd?
  str.scan(/.{1,2}/)
end
