def valid_parentheses(string)
  par = 0
  string.each_char do |char|
    par += 1 if char == "("
    par -= 1 if char == ")"
    return false if par.negative?
  end
  par == 0
end

# https://www.codewars.com/kata/52774a314c2333f0a7000688
